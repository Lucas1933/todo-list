import restorePasswordLogModel from 'db/models/restore_password_log_model';

export async function createPasswordRestorationEntry(email: string) {
	try {
		const result = await restorePasswordLogModel.create({ email });
		return result;
	} catch (error) {
		throw new Error('Failed to create PasswordRestorationEntry');
	}
}

export async function isEmailLogged(email: string): Promise<boolean> {
	try {
		const result = await restorePasswordLogModel.findOne({ email });
		if (result) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		throw new Error('Failed to verify if email was logged');
	}
}
