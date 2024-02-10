import mongoose from 'mongoose';
const connectToDatabase = async (DB_URL: string) => {
	try {
		console.log('Connecting to MongoDB...');
		await mongoose.connect(DB_URL);
		console.log('Connected successfully to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
};

export default connectToDatabase;
