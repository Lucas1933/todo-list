<script lang="ts">
	import editIcon from 'assets/icons/edit-3-svgrepo-com.svg';
	import deleteIcon from 'assets/icons/delete-1487-svgrepo-com.svg';
	import taskCompletedIcon from 'assets/icons/favicon.png';
</script>

<div class="mx-3 mt-2 flex flex-col border-2 border-solid">
	<nav class="flex justify-end">
		<div class="flex w-full">
			<button
				class="ml-2 mt-2 flex items-center rounded-lg border-2 border-solid"
				data-te-toggle="modal"
				data-te-target="#completedTaskModal"
			>
				<img class="w-10" src={taskCompletedIcon} alt="" />
				<span>task accomplished?</span></button
			>
		</div>
		<button class="m-3 w-10" data-te-toggle="modal" data-te-target="#editTaskModal"
			><img src={editIcon} alt="" /></button
		>
		<button class="m-3 w-10" data-te-toggle="modal" data-te-target="#deleteTaskModal"
			><img src={deleteIcon} alt="" /></button
		>
	</nav>
	<hr class="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

	<main class="mx-1">
		<h1>Walking the dog</h1>
		<hr class="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum harum laborum
			doloremque inventore eveniet, distinctio vel debitis quia dicta sit nulla libero corrupti qui
			quasi exercitationem dolorem iusto voluptate!
		</p>
	</main>
	<hr class="mx-2 my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

	<footer class="mx-2 flex flex-col">
		<span class="mb-3">Started at: 2020/05/12 15:30hs</span>
		<span>Accomplish before: 2020/05/12 15:30hs</span>
	</footer>
</div>
