<script lang="ts">
	import FormErrorMessage from '$lib/components/FormErrorMessage.svelte';
	import Login from '$lib/components/Login.svelte';
	import LoginHeader from '$lib/components/LoginHeader.svelte';
	import LoginFooter from '$lib/components/LoginFooter.svelte';

	export let form;
</script>

<LoginHeader />

<Login />

<LoginFooter />
{#if form}
	<FormErrorMessage message={form.message} />
{/if}
