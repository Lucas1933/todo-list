import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './register/$types';

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
	}
};
