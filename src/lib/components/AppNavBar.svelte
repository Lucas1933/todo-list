<script lang="ts">
	import completedTasksIcon from 'assets/icons/favicon.png';
	import pendingTasksIcon from 'assets/icons/circle-with-minus-svgrepo-com.svg';
	import profileIcon from 'assets/icons/profile-round-1342-svgrepo-com.svg';

	import { completedViewStore } from '$lib/stores/completedViewStore';
</script>

<nav
	class="flex justify-between rounded-lg border-b-2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
>
	<a
		href="/app/tasks"
		class="flex basis-full flex-col items-center justify-end"
		on:click={() => {
			completedViewStore.set(true);
		}}
	>
		<img src={completedTasksIcon} class="w-11 pb-1" alt="" />
		<span>Completed</span>
	</a>
	<a
		href="/app/tasks"
		class="flex basis-full flex-col items-center"
		on:click={() => {
			completedViewStore.set(false);
		}}
	>
		<img src={pendingTasksIcon} class="w-14" alt="" />
		<span>Pending</span>
	</a>
	<a href="/app/profile" class="flex basis-full flex-col items-center justify-end">
		<img src={profileIcon} class="w-11 pb-1" alt="" />
		<span>Profile</span>
	</a>
</nav>
