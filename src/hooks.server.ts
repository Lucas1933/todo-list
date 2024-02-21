import MongoDataBase from 'db/mongo';
import { decodeJwtToken } from 'utils/jwt';
import { loadingStore } from '$lib/stores/loading.js';

const mongoDB = MongoDataBase.getInstance();

export async function handle({ event, resolve }) {
	const userCookie = event.cookies.get('user');
	if (userCookie) {
		const decodedUser = decodeJwtToken(userCookie) as UserForCookie;
		(event.locals as ExtendedLocals).user = decodedUser;
	}
	loadingStore.set(false);
	return resolve(event);
}
