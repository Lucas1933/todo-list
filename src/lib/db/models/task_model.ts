import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		completed: { type: String, required: true },
		completed_at: { type: Date, required: true },
		owner: { type: Schema.Types.ObjectId, required: true }
	},
	{ timestamps: { createdAt: 'created_at' } }
);

const taskModel = mongoose.model('Tasks', taskSchema);

export default taskModel;
