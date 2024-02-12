import { redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { getUserByEmail } from 'db/services/user_service';
export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const userFromDb: User | null = await getUserByEmail(email);
		if (!userFromDb) {
			return { status: 401, message: 'email or password incorrect' };
		}

		const isUserValid = await bcrypt.compare(password, userFromDb.password);

		if (!isUserValid) {
			return { status: 401, message: 'email or password incorrect' };
		}

		redirect(303, '/');
	}
};
