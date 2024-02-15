import { createUser, getUserByEmail } from 'db/services/user_service.js';
import { generateJwtToken } from 'utils/jwt';
import bcrypt from 'bcrypt';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = (locals as ExtendedLocals).user;
	if (user) {
		redirect(303, '/');
	}
};
export const actions: Actions = {
	register: async ({ cookies, request }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email') as string;
			const userName = formData.get('user_name') as string;
			const password = formData.get('password') as string;

			const userFromDb = await getUserByEmail(email);

			if (userFromDb) {
				return { status: 409, message: 'email already registered' };
			}

			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser: User = { email, user_name: userName, password: hashedPassword };
			const insertedDbUser = await createUser(newUser);
			const tokenizedUser = generateJwtToken(insertedDbUser, 24 * 60 * 60);

			cookies.set('user', tokenizedUser, {
				path: '/',
				httpOnly: true,
				maxAge: new Date().getTime() + 3600 * 1000
			});
		} catch (error) {
			console.log(error);
		}
	}
};
