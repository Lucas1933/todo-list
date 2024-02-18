import bcrypt from 'bcrypt';

export async function hashPassword(passwordToBeHashed: string) {
	const hashedPassword = await bcrypt.hash(passwordToBeHashed, 10);
	return hashedPassword;
}
