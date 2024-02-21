import mongoose from 'mongoose';
const { Schema } = mongoose;
const restorePasswordLogSchema = new Schema({
	email: String,
	createdAt: { type: Date, default: Date.now, index: { expires: '1hs' } }
});

const restorePasswordLogModel = mongoose.model('RestorePasswordLogs', restorePasswordLogSchema);
export default restorePasswordLogModel;
