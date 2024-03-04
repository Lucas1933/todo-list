import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './routes/auth/login/$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = (locals as ExtendedLocals).user;
	if (user) {
		redirect(303, '/app/tasks');
	} else {
		redirect(303, '/auth/login');
	}
};
