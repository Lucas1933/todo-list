<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import editIcon from 'assets/icons/edit-3-svgrepo-com.svg';
	import deleteIcon from 'assets/icons/delete-1487-svgrepo-com.svg';
	import taskPendingIcon from 'assets/icons/circle-with-minus-svgrepo-com.svg';
	import taskCompletedIcon from 'assets/icons/favicon.png';

	export let name: string;
	export let description: string;
	export let started_at: Date;
	export let accomplish_before: Date;
	export let completed: boolean;
	export let owner: string;
	export let _id: string;

	const dispatch = createEventDispatcher();

	function dispatchTaskData() {
		dispatch('taskData', {
			name,
			description,
			started_at,
			accomplish_before,
			completed,
			owner,
			_id
		});
	}
</script>

<div
	class="border-primary-600 mx-3 mt-2 flex flex-col rounded-lg border-2 border-solid shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
>
	<nav class="flex justify-end">
		<div class="flex w-full">
			{#if completed}
				<button
					class="ml-2 mt-2 flex items-center rounded-lg border-2 border-solid border-green-600"
					on:click={dispatchTaskData}
					data-te-toggle="modal"
					data-te-target="#completedTaskModal"
				>
					<img class="m-2 w-10" src={taskCompletedIcon} alt="" />
					<span class="mr-2">Completed</span>
				</button>
			{:else}
				<button
					class="ml-2 mt-2 flex items-center rounded-lg border-2 border-solid border-[#e7e704]"
					on:click={dispatchTaskData}
					data-te-toggle="modal"
					data-te-target="#completedTaskModal"
				>
					<img class="m-2 w-10" src={taskPendingIcon} alt="" />
					<span class="mr-2">Pending</span>
				</button>
			{/if}
		</div>
		<button
			class="m-3 w-10"
			on:click={dispatchTaskData}
			data-te-toggle="modal"
			data-te-target="#editTaskModal"><img src={editIcon} alt="" /></button
		>
		<button
			class="m-3 w-10"
			on:click={dispatchTaskData}
			data-te-toggle="modal"
			data-te-target="#deleteTaskModal"><img src={deleteIcon} alt="" /></button
		>
	</nav>
	<hr class="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

	<main class="mx-1">
		<h1>{name}</h1>
		<hr class="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

		<p>
			{description}
		</p>
	</main>
	<hr class="mx-2 my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

	<footer class="mx-2 flex flex-col">
		<span class="mb-3">Started at: {started_at.toLocaleDateString()}</span>
		<span>Accomplish before: {accomplish_before.toLocaleDateString()}</span>
	</footer>
</div>
