import type { Context } from '@netlify/functions';

export default async (req: Request, context: Context) => {
	console.log('hello console');
	return new Response('Hello, world!');
};
