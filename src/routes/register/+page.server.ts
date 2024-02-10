import { createUser } from 'db/services/user_service.js';
import { isString } from '../../type_guards.js';
import bcrypt from 'bcrypt';
export const actions = {
	register: async ({ cookies, request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const userName = formData.get('user_name');
		const password = formData.get('password');

		if (!isString(userName) || !isString(email) || !isString(password)) {
			return { status: 400, message: 'Bad request' };
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser: User = { email, user_name: userName, password: hashedPassword };
		const result = await createUser(newUser);

		return { status: 201, message: 'User registered' };
	}
};
