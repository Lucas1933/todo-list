import mongoose from 'mongoose';
import { DB_URL } from '$env/static/private';
class MongoDataBase {
	private static instance: MongoDataBase;

	private constructor() {
		this.connectToDatabase(DB_URL);
	}

	static getInstance(): MongoDataBase {
		if (!MongoDataBase.instance) {
			MongoDataBase.instance = new MongoDataBase();
		}
		return MongoDataBase.instance;
	}

	private connectToDatabase = async (DB_URL: string) => {
		try {
			console.log('Connecting to MongoDB...');
			await mongoose.connect(DB_URL);
			console.log('Connected successfully to MongoDB');
		} catch (error) {
			console.error('Error connecting to MongoDB:', error);
		}
	};
}
export default MongoDataBase;
