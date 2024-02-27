<script lang="ts">
	import { onMount } from 'svelte';

	import editIcon from 'assets/icons/edit-3-svgrepo-com.svg';
	import deleteIcon from 'assets/icons/delete-1487-svgrepo-com.svg';
	onMount(async () => {
		const { Ripple, Input, Modal, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Modal });
	});
</script>

<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
<div class="space-y-2">
	<!--Button trigger vertically centered scrollable modal-->
	<button
		type="button"
		class="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
		data-te-toggle="modal"
		data-te-target="#exampleModalCenteredScrollable"
		data-te-ripple-init
		data-te-ripple-color="light"
	>
		Vertically centered scrollable modal
	</button>
</div>

<!--Verically centered scrollable modal-->
<div
	data-te-modal-init
	class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
	id="exampleModalCenteredScrollable"
	tabindex="-1"
	aria-labelledby="exampleModalCenteredScrollableLabel"
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
					id="exampleModalCenteredScrollableLabel"
					value="Walking the dog"
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
					rows="120"
					>This is some placeholder content to show a vertically centered modal. We've added some
					extra copy here to show how vertically centering the modal works when combined with
					scrollable modals. We also use some repeated line breaks to quickly extend the height of
					the content, thereby triggering the scrolling. When content becomes longer than the
					predefined max-height of modal, content will be cropped and scrollable within the modal.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum voluptatum eveniet
					accusamus? Molestias voluptatem dolores minima deserunt libero veritatis ex recusandae,
					culpa similique nesciunt reiciendis ullam modi aliquam. Deleniti. Facilis fugiat rerum,
					quas perspiciatis necessitatibus, tenetur sint quos consequuntur accusamus ab eveniet iure
					asperiores voluptate. Totam voluptate, libero odit labore ea incidunt, quisquam rerum
					repellendus nemo nihil quam voluptatem? Sed dolorem explicabo unde culpa ipsam fugit iste
					numquam eveniet placeat illum quisquam omnis ipsum quae vero, iusto quidem vitae id non
					totam! Magni porro quibusdam facere? Eum, culpa corporis. Cumque, ex voluptatibus
					similique at quas, quis cum quia, accusamus voluptatum porro temporibus laudantium
					repellat id quasi. Voluptatibus tempore, ea accusamus tempora nostrum voluptatem
					perferendis maiores ipsum veniam, aperiam quod. Libero eveniet accusantium perferendis
					qui. Dolore commodi neque nesciunt, accusamus, fugiat officiis, adipisci in optio
					recusandae iste nihil? Facilis numquam cum, quae illo libero odio assumenda reiciendis
					quidem non corrupti! Quos maiores aliquam fugit reprehenderit provident, eos odit vel,
					quaerat ipsam voluptatem sequi itaque eius adipisci non facilis inventore minima ex esse
					debitis explicabo impedit libero! Architecto voluptate delectus sed? Veniam assumenda
					ducimus omnis et vel magni natus aliquam dolore voluptatibus. Accusamus quaerat
					reprehenderit minus quidem reiciendis, nobis illum doloribus officia recusandae ab! Sint
					quasi ipsam repudiandae, eos nemo nesciunt. Porro, quaerat molestiae assumenda eligendi
					perspiciatis asperiores error natus? Placeat magni natus laboriosam mollitia recusandae
					praesentium, nulla vero rerum harum nobis. Eum mollitia unde dignissimos tempore,
					inventore architecto voluptate ipsa. Omnis assumenda excepturi laudantium non blanditiis
					libero obcaecati amet repudiandae possimus similique atque qui iure sit enim quaerat minus
					corrupti cupiditate, maxime at! Eaque possimus nobis architecto excepturi id at? Velit
					culpa molestiae fuga quam nostrum eos blanditiis quaerat iure architecto quibusdam. Sequi
					ex distinctio eveniet reprehenderit eius repellendus rem molestias qui eum ipsam, quaerat,
					voluptatibus officiis perferendis magni ab!</textarea
				>
			</div>
			<div class="flex flex-col">
				<label for="started">Started At</label>
				<input class="mb-3 rounded-lg border-2 border-solid" type="date" name="" id="started" />
				<label for="accomplish">Accomplish before:</label>
				<input class="mb-3 rounded-lg border-2 border-solid" type="date" name="" id="accomplish" />
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
