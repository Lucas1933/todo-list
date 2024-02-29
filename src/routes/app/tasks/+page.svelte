<script lang="ts">
	import TaskCard from '$lib/components/TaskCard.svelte';
	import CompletedTaskModal from '$lib/components/CompletedTaskModal.svelte';
	import EditTaskCardModal from '$lib/components/EditTaskCardModal.svelte';
	import NewTaskModal from '$lib/components/NewTaskModal.svelte';
	import DeleteTaskModal from '$lib/components/DeleteTaskModal.svelte';
	import AddTaskButton from '$lib/components/AddTaskButton.svelte';
	import { onMount } from 'svelte';
	import { completedViewStore } from '$lib/stores/completedViewStore';

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

{#if data.tasks.length > 0}
	{#each data.tasks as eachTask}
		{#if $completedViewStore && eachTask.completed}
			<TaskCard
				name={eachTask.name}
				description={eachTask.description}
				started_at={eachTask.started_at}
				accomplish_before={eachTask.accomplish_before}
				completed={eachTask.completed}
				owner={eachTask.owner}
				_id={eachTask._id}
				on:taskData={handleTaskData}
			/>
		{:else if !$completedViewStore && !eachTask.completed}
			<TaskCard
				name={eachTask.name}
				description={eachTask.description}
				started_at={eachTask.started_at}
				accomplish_before={eachTask.accomplish_before}
				completed={eachTask.completed}
				owner={eachTask.owner}
				_id={eachTask._id}
				on:taskData={handleTaskData}
			/>
		{/if}
	{/each}
{/if}

{#if !$completedViewStore}
	<AddTaskButton />
{/if}

<NewTaskModal />

<CompletedTaskModal taskId={taskData._id} />
<DeleteTaskModal taskId={taskData._id} taskName={taskData.name} />
<EditTaskCardModal
	name={taskData.name}
	description={taskData.description}
	started_at={taskData.started_at}
	completed={taskData.completed}
	accomplish_before={taskData.accomplish_before}
	_id={taskData._id}
/>
