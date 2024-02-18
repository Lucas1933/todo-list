import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './register/$types';
import { deleteUserById } from 'db/services/user_service';

export const load: PageServerLoad = async ({ locals }) => {
	const user = (locals as ExtendedLocals).user;
	if (!user) {
		redirect(303, '/login');
	}
	return user;
};

export const actions: Actions = {
	logout: async ({ cookies, request }) => {
		cookies.delete('user', { path: '/' });
		redirect(303, '/login');
	},

	delete_account: async ({ cookies, request, locals }) => {
		const user = (locals as ExtendedLocals).user;
		const result = await deleteUserById(user._id!);
		cookies.delete('user', { path: '/' });
		redirect(303, '/login');
	}
};
