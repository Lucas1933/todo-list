import userModel from 'db/models/user_model';
import type { Document } from 'mongoose';

export async function createUser(newUser: User) {
	const result = await userModel.create(newUser);
	const insertedUser = result.toObject();
	const { password, ...user } = insertedUser;
	return user;
}

export async function getUserByEmail(
	email: string,
	{ withPassword = false }: { withPassword?: boolean } = {}
): Promise<User | null> {
	let user: User | null;
	let result: Document | null;
	if (withPassword) {
		result = await userModel.findOne({ email }).select('+password');
	} else {
		result = await userModel.findOne({ email });
	}

	if (result) {
		user = result.toObject();
	} else {
		user = null;
	}
	return user;
}

export async function deleteUserById(id: string) {
	const result = await userModel.findByIdAndDelete(id);
	return result;
}

export async function updateUserById(id: string, user: User) {
	const result = await userModel.findByIdAndUpdate(id, user);
	return result;
}
