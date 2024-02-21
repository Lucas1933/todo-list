import restorePasswordLogModel from 'db/models/restore_password_log_model';
export async function createPasswordRestorationEntry(email: string) {
	const result = await restorePasswordLogModel.create({ email });
	return result;
}

export async function isEmailLogged(email: string): Promise<boolean> {
	const result = await restorePasswordLogModel.findOne({ email });
	if (result) {
		return true;
	} else {
		return false;
	}
}
