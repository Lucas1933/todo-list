import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const taskSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		completed: { type: Boolean, required: true },
		started_at: { type: Date, required: true },
		accomplish_before: { type: Date, required: true },
		owner: { type: String, required: true }
	},
	{ timestamps: { createdAt: 'created_at' } }
);

const taskModel = mongoose.model('Tasks', taskSchema);

export default taskModel;
