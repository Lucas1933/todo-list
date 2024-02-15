import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
	user_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true, select: false }
});

const userModel = mongoose.model('Users', userSchema);

export default userModel;
