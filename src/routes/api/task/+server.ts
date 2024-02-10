import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const newTask = await request.json();
	console.log(newTask);
	return json({ message: 'created' });
}
