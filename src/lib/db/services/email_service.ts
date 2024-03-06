import nodemailer from 'nodemailer';
import { EMAIL_PSW, EMAIL_USER } from '$env/static/private';
export default class EmailService {
	private transporter;
	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PSW
			}
		});
	}
	sendPasswordRestorationEmail(email: string, link: string) {
		try {
			const mailOptions = {
				from: EMAIL_USER,
				to: email,
				subject: 'Recuperar contraseña',
				text: `Haga click aqui --> ${link} <-- para recuperar su contraseña`
			};

			this.transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
				}
			});
		} catch (error) {
			throw new Error('Failed to send email', error);
		}
	}
}
