import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const newTask = await request.json();

	return json({ message: 'created' });
}
