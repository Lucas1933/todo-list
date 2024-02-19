import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';
import { getUserByEmail, updateUserById } from 'db/services/user_service';
import { decodeJwtToken } from 'utils/jwt';
import type { JwtPayload } from 'jsonwebtoken';
import { hashPassword } from 'utils/bcrypt';

export const load: PageServerLoad = async ({ params }) => {
	return { token: (params as Params).slug };
};

export const actions: Actions = {
	restore_password: async ({ cookies, request, params }) => {
		const formData = await request.formData();
		const password = formData.get('password') as string;
		const token = params.slug!;
		const decodedPayload = decodeJwtToken(token) as JwtPayload;
		const email = decodedPayload.email;
		const userFromDb = await getUserByEmail(email);
		const hashedPassword = await hashPassword(password);
		if (userFromDb) {
			userFromDb.password = hashedPassword;
			const result = await updateUserById(userFromDb._id, userFromDb);
		}
	}
};
