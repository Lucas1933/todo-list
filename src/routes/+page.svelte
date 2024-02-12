<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Tooltip, initTE } = await import('tw-elements');
		initTE({ Tooltip });
	});
</script>

<div class="mt-16 flex justify-center">
	<p class="text-lg">
		Hover the link to see the
		<a
			href="#"
			class="text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 transition duration-150 ease-in-out"
			data-te-toggle="tooltip"
			title="Hi! I'm tooltip">tooltip</a
		>
	</p>
</div>
