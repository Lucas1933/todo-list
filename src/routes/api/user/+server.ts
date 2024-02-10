import { json } from '@sveltejs/kit';
import { createUser } from 'db/services/user_service.js';
export async function POST({ request }) {
	const newUser: User = await request.json();
	const result = await createUser(newUser);
	return json({ message: 'user registered' });
}
