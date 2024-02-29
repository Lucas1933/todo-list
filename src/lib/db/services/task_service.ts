import taskModel from 'db/models/task_model';

export async function createTask(newTask: TaskForInsertion) {
	try {
		const task = await taskModel.create(newTask);
		return task;
	} catch (error) {
		throw new Error('Failed to create task');
	}
}

export async function getTasksByUserId(id: string): Promise<TaskFromDb[]> {
	try {
		const tasks = await taskModel.find({ owner: id }).lean();

		return tasks;
	} catch (error) {
		throw new Error('Failed to fetch task');
	}
}
export async function deleteTask(id: string) {
	try {
		const task = await taskModel.findByIdAndDelete(id);
		return task;
	} catch (error) {
		throw new Error('Failed to delete task');
	}
}

export async function updateTask(id: string, taskToUpdate: TaskForInsertion) {
	try {
		const { owner, ...taskToUpdateWithoutOwner } = taskToUpdate;

		const task = await taskModel.findByIdAndUpdate(
			id,
			{ $set: { ...taskToUpdateWithoutOwner } },
			{ new: true }
		);

		return task;
	} catch (error) {
		throw new Error('Failed to update task');
	}
}
/* 
export async function getTaskById(id) {
	try {
		const task = await taskModel.findById(id);
		return task;
	} catch (error) {
		throw new Error('Failed to fetch task');
	}
}




 */
