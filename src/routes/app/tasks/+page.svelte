<script lang="ts">
	import TaskCard from '$lib/components/TaskCard.svelte';
	import CompletedTaskModal from '$lib/components/CompletedTaskModal.svelte';
	import EditTaskCardModal from '$lib/components/EditTaskCardModal.svelte';
	import NewTaskModal from '$lib/components/NewTaskModal.svelte';
	import DeleteTaskModal from '$lib/components/DeleteTaskModal.svelte';
	import AddTaskButton from '$lib/components/AddTaskButton.svelte';
	import { onMount } from 'svelte';

	export let data;
	let taskData: TaskFromDb = {
		name: '',
		description: '',
		started_at: new Date(),
		accomplish_before: new Date(),
		owner: '',
		completed: false,
		_id: ''
	};

	function handleTaskData(event: any) {
		taskData = event.detail;
	}

	onMount(async () => {
		const { Ripple, Input, Modal, Datepicker, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Datepicker, Modal });
	});
</script>

<div class="h-[100vh] overflow-y-scroll">
	{#if data.tasks.length > 0}
		{#each data.tasks as eachTask}
			<TaskCard
				name={eachTask.name}
				description={eachTask.description}
				started_at={eachTask.started_at.toLocaleDateString()}
				accomplish_before={eachTask.accomplish_before.toLocaleDateString()}
				completed={eachTask.completed}
				owner={eachTask.owner}
				_id={eachTask._id}
				on:taskData={handleTaskData}
			/>
		{/each}
	{/if}

	<CompletedTaskModal />
	<NewTaskModal />
	<DeleteTaskModal taskId={taskData._id} taskName={taskData.name} />
	<EditTaskCardModal
		name={taskData.name}
		description={taskData.description}
		started_at={taskData.started_at}
		accomplish_before={taskData.accomplish_before}
		_id={taskData._id}
	/>
	<AddTaskButton />
</div>
