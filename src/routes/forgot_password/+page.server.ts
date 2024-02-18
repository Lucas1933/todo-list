import type { Actions } from '@sveltejs/kit';
import EmailService from 'db/services/email_service';
import { getUserByEmail } from 'db/services/user_service';
import { generateJwtToken } from 'utils/jwt';

export const actions: Actions = {
	restore_password: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const userExists = await getUserByEmail(email);
		if (userExists) {
			const emailService = new EmailService();
			const expiration = 24 * 60 * 60;
			const jwtPayload = { email };
			const resetPasswordToken = generateJwtToken(jwtPayload, expiration);
			emailService.sendPasswordRestorationEmail(
				email,
				'http://localhost:5173/restore_password/' + resetPasswordToken
			);
		}
	}
};
