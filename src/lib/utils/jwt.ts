import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
export function generateJwtToken(incomingPayload: any, expiration: number) {
	const token = jwt.sign(incomingPayload, JWT_SECRET, {
		expiresIn: expiration
	});
	return token;
}

export function decodeJwtToken(token: string) {
	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		return decoded;
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return null;
		}
		if (error instanceof jwt.JsonWebTokenError) {
			console.log('Error decoding JWT', error);
		}
	}
}
