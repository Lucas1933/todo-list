import userModel from 'db/models/user_model';

export async function createUser(newUser: User) {
	const result = await userModel.create(newUser);
	return result;
}
