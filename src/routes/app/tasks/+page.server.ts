import { redirect, type Actions } from '@sveltejs/kit';
import {
	createTask,
	getTasksByUserId,
	deleteTask,
	updateTask,
	completeTask
} from 'db/services/task_service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = (locals as ExtendedLocals).user;
	if (!user) {
		redirect(303, '/auth/login');
	}
	const tasks = await getTasksByUserId(user._id);
	tasks.forEach((eachTask) => {
		eachTask._id = eachTask._id.toString();
	});
	return { tasks };
};

export const actions: Actions = {
	create_task: async ({ cookies, request, locals }) => {
		try {
			const user = (locals as ExtendedLocals).user;
			const formData = await request.formData();
			const name = formData.get('name') as string;
			const description = formData.get('description') as string;
			const started_at = formData.get('started_at') as string;
			const accomplish_before = formData.get('accomplish_before') as string;

			const started_at_split = started_at.split('/');
			const accomplish_before_split = accomplish_before.split('/');

			const started_at_date = new Date(
				Number(started_at_split[2]),
				Number(started_at_split[1]) - 1,
				Number(started_at_split[0])
			);

			const accomplish_before_date = new Date(
				Number(accomplish_before_split[2]),
				Number(accomplish_before_split[1]) - 1,
				Number(accomplish_before_split[0])
			);

			const newTask: TaskForInsertion = {
				name,
				description,
				started_at: started_at_date,
				accomplish_before: accomplish_before_date,
				completed: false,
				owner: user._id
			};

			const result = await createTask(newTask);
		} catch (error) {
			console.log('error in tasks/page.server', error);
		}
	},
	delete_task: async ({ request }) => {
		try {
			const formData = await request.formData();
			const taskId = formData.get('task_id') as string;
			const result = await deleteTask(taskId);
		} catch (error) {
			console.log('error in tasks/page.server delete_task', error);
		}
	},
	update_task: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name') as string;
			const description = formData.get('description') as string;
			const started_at = formData.get('started_at') as string;
			const completed = formData.get('completed') as string;
			const accomplish_before = formData.get('accomplish_before') as string;
			const task_id = formData.get('task_id') as string;
			const started_at_split = started_at.split('-');
			const accomplish_before_split = accomplish_before.split('-');

			const started_at_date = new Date(
				Number(started_at_split[0]),
				Number(started_at_split[1]) - 1,
				Number(started_at_split[2])
			);

			const accomplish_before_date = new Date(
				Number(accomplish_before_split[0]),
				Number(accomplish_before_split[1]) - 1,
				Number(accomplish_before_split[2])
			);

			const result = await updateTask(task_id, {
				name,
				description,
				owner: '',
				accomplish_before: accomplish_before_date,
				completed: JSON.parse(completed),
				started_at: started_at_date
			});
		} catch (error) {
			console.log('error in tasks/page.server update_task', error);
		}
	},
	complete_task: async ({ request }) => {
		try {
			const formData = await request.formData();
			const taskId = formData.get('task_id') as string;
			const result = await completeTask(taskId);
		} catch (error) {
			console.log('error in tasks/page.server complete_task', error);
		}
	}
};
