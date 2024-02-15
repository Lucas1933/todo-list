import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
export function generateJwtToken(incomingPayload: any, expiration: number) {
	const token = jwt.sign(incomingPayload, JWT_SECRET, {
		expiresIn: expiration
	});
	return token;
}

export function decodeJwtToken(token: string) {
	const decoded = jwt.verify(token, JWT_SECRET);
	return decoded;
}
