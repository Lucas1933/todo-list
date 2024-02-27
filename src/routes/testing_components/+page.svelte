<script lang="ts">
	import DeleteTaskModal from '$lib/components/DeleteTaskModal.svelte';
	import EditTaskCardModal from '$lib/components/EditTaskCardModal.svelte';
	import CompletedTaskModal from '$lib/components/CompletedTaskModal.svelte';
	import NewTaskModal from '$lib/components/NewTaskModal.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import TaskCard from '$lib/components/TaskCard.svelte';
</script>

<!-- 
<Loading /> -->
<CompletedTaskModal />
<DeleteTaskModal />
<EditTaskCardModal />
<NewTaskModal />
<TaskCard />
<button
	class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 t fixed bottom-[20vh] right-[5vh] rounded-full text-base font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
	data-te-toggle="modal"
	data-te-target="#newTaskModal"
>
	Nueva tarea
</button>
