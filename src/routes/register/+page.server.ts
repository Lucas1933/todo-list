import { createUser, getUserByEmail } from 'db/services/user_service.js';
import { isString } from '../../type_guards.js';
import bcrypt from 'bcrypt';
import { redirect, type Actions } from '@sveltejs/kit';
export const actions: Actions = {
	register: async ({ cookies, request }) => {
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
		const result = await createUser(newUser);

		redirect(303, '/');
		/* return { status: 201, message: 'User registered' }; */
	}
};
