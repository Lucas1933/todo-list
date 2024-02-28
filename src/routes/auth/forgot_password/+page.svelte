<script lang="ts">
	import { onMount } from 'svelte';
	import EmailSended from '$lib/components/EmailSended.svelte';
	import ForgotPasswordHeader from '$lib/components/ForgotPasswordHeader.svelte';
	import ForgotPassword from '$lib/components/ForgotPassword.svelte';
	import FormErrorMessage from '$lib/components/FormErrorMessage.svelte';

	export let form;

	onMount(async () => {
		const { Ripple, Input, initTE } = await import('tw-elements');
		initTE({ Ripple, Input });
	});
</script>

{#if form?.succes}
	<EmailSended />
{:else}
	<ForgotPasswordHeader />
	<ForgotPassword />
	<FormErrorMessage message={form?.message} />
{/if}
