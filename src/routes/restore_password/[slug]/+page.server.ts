import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';
import { getUserByEmail, updateUserById } from 'db/services/user_service';
import { decodeJwtToken } from 'utils/jwt';
import { hashPassword } from 'utils/bcrypt';
import type { JwtPayload } from 'jsonwebtoken';

export const load: PageServerLoad = async ({ params }) => {
	const token = (params as Params).slug;
	const decodedPayload = decodeJwtToken(token) as JwtPayload;
	if (!decodedPayload) {
		return { status: 401, expired: true, message: 'The restoration link has expired' };
	}
	return null;
};

export const actions: Actions = {
	restore_password: async ({ cookies, request, params }) => {
		try {
			const token = params.slug!;
			const decodedPayload = decodeJwtToken(token) as JwtPayload;
			if (!decodedPayload) {
				return fail(401, { expired: true, message: 'The restoration link has expired' });
			}
			const formData = await request.formData();
			const password = formData.get('password') as string;
			const email = decodedPayload.email;
			const userFromDb = await getUserByEmail(email);
			const hashedPassword = await hashPassword(password);
			if (userFromDb) {
				userFromDb.password = hashedPassword;
				const result = await updateUserById(userFromDb._id, userFromDb);
			}
		} catch (error) {
			console.log('Error in restore_password/page.server ', error);
		}
	}
};
