<script lang="ts">
	/* 	import { onMount } from 'svelte';
	onMount(async () => {
		const { Ripple, Input, Modal, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Modal });
	}); */
	export let name: string;
	export let description: string;
	export let started_at: Date;
	export let accomplish_before: Date;

	export let _id: string;
</script>

<!--Verically centered scrollable modal-->
<div
	data-te-modal-init
	class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
	id="editTaskModal"
	tabindex="-1"
	aria-labelledby="editTaskModalLabel"
	aria-modal="true"
	role="dialog"
>
	<div
		data-te-modal-dialog-ref
		class="pointer-events-none relative m-3 flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
	>
		<div
			class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
		>
			<div
				class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
			>
				<!--Modal title-->
				<input
					class="rounded-lg border-2 border-solid text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
					id="editTaskModalLabel"
					value={name}
				/>

				<!--Close button-->
				<button
					type="button"
					class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
					data-te-modal-dismiss
					aria-label="Close"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!--Modal body-->
			<div class="relative p-4">
				<textarea
					class="max-h-[50vh] max-w-full rounded-lg border-2 border-solid"
					name=""
					id=""
					cols="120"
					rows="120">{description}</textarea
				>
			</div>
			<div class="flex flex-col">
				<label for="started">Started At</label>
				<input
					class="mb-3 rounded-lg border-2 border-solid"
					type="date"
					name="started_at"
					id="started"
					value={started_at}
				/>
				<label for="accomplish">Accomplish before:</label>
				<input
					class="mb-3 rounded-lg border-2 border-solid"
					type="date"
					name="accomplish_before"
					id="accomplish"
					value={accomplish_before}
				/>
			</div>
			<!--Modal footer-->
			<div
				class="flex items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
			>
				<button
					class="ml-1 inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
					data-te-ripple-init
					data-te-ripple-color="light">DELETE TASK</button
				>

				<button
					type="button"
					class="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 ml-1 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					Save changes
				</button>
			</div>
		</div>
	</div>
</div>
