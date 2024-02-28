<script lang="ts">
	import FormErrorMessage from '$lib/components/FormErrorMessage.svelte';
	import Login from '$lib/components/Login.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginFooter from '$lib/components/LoginFooter.svelte';
	import { onMount } from 'svelte';

	export let form;

	onMount(async () => {
		const { Ripple, Input, initTE } = await import('tw-elements');
		initTE({ Ripple, Input });
	});
</script>

<LoginHeader />
<Login />
<LoginFooter />
{#if form}
	<FormErrorMessage message={form.message} />
{/if}
