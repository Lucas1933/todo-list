import mongoose from 'mongoose';
const { Schema } = mongoose;
const restorePasswordLogSchema = new Schema({
	email: String,
	createdAt: { type: Date, expires: '1h', default: Date.now }
});

const restorePasswordLogModel = mongoose.model('RestorePasswordLogs', restorePasswordLogSchema);
export default restorePasswordLogModel;
