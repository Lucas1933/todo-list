import userModel from 'db/models/user_model';

export async function createUser(newUser: User) {
	const result = await userModel.create(newUser);
	return result;
}

export async function getUserByEmail(email: string): Promise<User | null> {
	const result = (await userModel.findOne({ email })) as User;
	return result;
}
