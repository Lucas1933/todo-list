import { fail, type Actions } from '@sveltejs/kit';
import EmailService from 'db/services/email_service';
import { getUserByEmail } from 'db/services/user_service';
import { generateJwtToken } from 'utils/jwt';

export const actions: Actions = {
	restore_password: async ({ request, cookies }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email') as string;
			const userExists = await getUserByEmail(email);

			if (!userExists) {
				return fail(404, { message: 'No user is registered with this email' });
			} else {
				const emailService = new EmailService();
				const expiration = 1 * 60;
				const jwtPayload = { email };
				const resetPasswordToken = generateJwtToken(jwtPayload, expiration);
				emailService.sendPasswordRestorationEmail(
					email,
					'http://localhost:5173/restore_password/' + resetPasswordToken
				);
			}
		} catch (error) {
			console.log('Error in forgot_password/page.server ', error);
		}
	}
};
