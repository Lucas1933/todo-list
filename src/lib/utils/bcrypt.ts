import bcrypt from 'bcrypt';

export async function hashPassword(passwordToBeHashed: string) {
	const hashedPassword = await bcrypt.hash(passwordToBeHashed, 10);
	return hashedPassword;
}

export async function comparePassword(password: string, hashedPassword: string) {
	const result = await bcrypt.compare(password, hashedPassword);
	return result;
}
