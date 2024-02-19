import MongoDataBase from 'db/mongo';
import { decodeJwtToken } from 'utils/jwt';

const mongoDB = MongoDataBase.getInstance();

export async function handle({ event, resolve }) {
	const userCookie = event.cookies.get('user');
	if (userCookie) {
		const decodedUser = decodeJwtToken(userCookie) as UserForCookie;
		(event.locals as ExtendedLocals).user = decodedUser;
	}
	return resolve(event);
}
