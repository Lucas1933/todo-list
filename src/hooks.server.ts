import { DB_URL } from '$env/static/private';

import connectToDatabase from 'db/mongo';
import { decodeJwtToken } from 'utils/jwt';

connectToDatabase(DB_URL);

export async function handle({ event, resolve }) {
	const userCookie = event.cookies.get('user');
	if (userCookie) {
		const decodedUser = decodeJwtToken(userCookie) as User;
		(event.locals as ExtendedLocals).user = decodedUser;
	}
	return resolve(event);
}
