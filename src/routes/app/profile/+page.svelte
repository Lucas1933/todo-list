<script lang="ts">
	import DeleteAccountButton from '$lib/components/DeleteAccountButton.svelte';
	import DeleteAccountModal from '$lib/components/DeleteAccountModal.svelte';
	import Logout from '$lib/components/Logout.svelte';
	import { onMount } from 'svelte';

	export let data;

	onMount(async () => {
		const { Ripple, Input, Modal, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Modal });
	});
</script>

<div class="flex h-[70vh] flex-col items-center justify-around">
	<h1>Welcome {data.user_name}</h1>
	<Logout />
	<DeleteAccountButton />
	<DeleteAccountModal />
</div>
