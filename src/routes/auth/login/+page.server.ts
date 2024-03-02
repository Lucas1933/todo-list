import { redirect, type Actions, fail } from '@sveltejs/kit';
import { comparePassword } from 'utils/bcrypt';
import { getUserByEmail } from 'db/services/user_service';
import { generateJwtToken } from 'utils/jwt';
import type { PageServerLoad } from './$types';
export const ssr = false;
export const load: PageServerLoad = async ({ locals }) => {
	const user = (locals as ExtendedLocals).user;
	if (user) {
		redirect(303, '/app/tasks');
	}
};
export const actions: Actions = {
	login: async ({ cookies, request }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email') as string;
			const loginPassword = formData.get('password') as string;
			const userFromDb = await getUserByEmail(email, { withPassword: true });
			if (!userFromDb) {
				return fail(401, { message: 'email or password incorrect' });
			}
			const isPasswordValid = await comparePassword(loginPassword, userFromDb.password);

			if (!isPasswordValid) {
				return fail(401, { message: 'email or password incorrect' });
			}
			const { password, ...user } = userFromDb;
			const tokenizedUser = generateJwtToken(user, 24 * 60 * 60);
			cookies.set('user', tokenizedUser, {
				path: '/',
				httpOnly: true,
				maxAge: new Date().getTime() + 24 * 3600
			});
		} catch (error) {
			console.log('Error in login/page.server ', error);
		}
	}
};
