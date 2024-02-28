<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types.js';
	import RestoreLinkExpired from '$lib/components/RestoreLinkExpired.svelte';
	import RegisterFooter from '$lib/components/RegisterFooter.svelte';
	import RestorePassword from '$lib/components/RestorePassword.svelte';
	import RestorationSuccess from '$lib/components/RestorationSuccess.svelte';

	export let form: ActionData;
	export let data: PageData;

	const expired = (data as any).expired;

	onMount(async () => {
		const { Ripple, Input, Button, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Button });
	});
</script>

{#if form?.expired || expired}
	<RestoreLinkExpired />
{:else if !form?.success}
	<RestorePassword />
	<RegisterFooter />
{:else}
	<RestorationSuccess />
{/if}
