import { fail, type Actions } from '@sveltejs/kit';
import EmailService from 'db/services/email_service';
import {
	createPasswordRestorationEntry,
	isEmailLogged
} from 'db/services/restore_password_log_service';
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
			}
			const wasLinkRequested = await isEmailLogged(email);

			if (wasLinkRequested) {
				return fail(404, {
					message: 'This email already requested a restoration link, please try later'
				});
			} else {
				const emailService = new EmailService();
				const expiration = 1 * 3600;
				const jwtPayload = { email };
				const resetPasswordToken = generateJwtToken(jwtPayload, expiration);
				emailService.sendPasswordRestorationEmail(
					email,
					'http://localhost:5173/restore_password/' + resetPasswordToken
				);
				const result = await createPasswordRestorationEntry(email);
				return {
					message: "The email was sent! if you don't see it please check your spam folder",
					succes: true
				};
			}
		} catch (error) {
			console.log('Error in forgot_password/page.server ', error);
		}
	}
};
