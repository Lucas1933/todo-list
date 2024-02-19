import { createUser, getUserByEmail } from 'db/services/user_service.js';
import { generateJwtToken } from 'utils/jwt';
import { hashPassword } from 'utils/bcrypt';
import { redirect, type Actions, fail } from '@sveltejs/kit';
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
			const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
			const formData = await request.formData();
			const email = formData.get('email') as string;
			const userName = formData.get('user_name') as string;
			const password = formData.get('password') as string;
			const repeatedPassword = formData.get('repeated_password') as string;
			const userFromDb = await getUserByEmail(email);

			if (userFromDb) {
				return fail(409, { message: 'Email already registered' });
			}
			if (!passwordRegex.test(password)) {
				return fail(422, { message: 'Password is not secure' });
			}
			if (repeatedPassword != password) {
				return fail(422, {
					message: 'The password does not match the repeat password value field'
				});
			}
			const hashedPassword = await hashPassword(password);
			const newUser: UserForInsertion = { email, user_name: userName, password: hashedPassword };
			const insertedDbUser = await createUser(newUser);
			const tokenizedUser = generateJwtToken(insertedDbUser, 24 * 60 * 60);

			cookies.set('user', tokenizedUser, {
				path: '/',
				httpOnly: true,
				maxAge: new Date().getTime() + 3600 * 1000
			});
		} catch (error) {
			console.log('Error in register/page.server ', error);
		}
	}
};
