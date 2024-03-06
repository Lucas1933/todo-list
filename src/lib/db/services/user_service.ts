import userModel from 'db/models/user_model';
import type { Document } from 'mongoose';

export async function createUser(newUser: UserForInsertion) {
	try {
		const result = await userModel.create(newUser);
		const insertedUser = result.toObject();
		const { password, ...user } = insertedUser;
		return user;
	} catch (error) {
		throw new Error('Failed to create user');
	}
}

export async function getUserByEmail(
	email: string,
	{ withPassword = false }: { withPassword?: boolean } = {}
): Promise<UserFromDb | null> {
	try {
		let user: UserFromDb | null;
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
	} catch (error) {
		throw new Error('Failed to get user');
	}
}

export async function deleteUserById(id: string) {
	try {
		const result = await userModel.findByIdAndDelete(id);
		return result;
	} catch (error) {
		throw new Error('Failed to delete user');
	}
}

export async function updateUserById(id: string, user: UserFromDb) {
	try {
		const result = await userModel.findByIdAndUpdate(id, user);
		return result;
	} catch (error) {
		throw new Error('Failed to update user');
	}
}
