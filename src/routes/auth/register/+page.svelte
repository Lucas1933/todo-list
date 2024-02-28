<script lang="ts">
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	import type { ActionData } from './$types';
	import Register from '$lib/components/Register.svelte';
	import RegisterFooter from '$lib/components/RegisterFooter.svelte';
	import RegisterHeader from '$lib/components/RegisterHeader.svelte';
	import FormErrorMessage from '$lib/components/FormErrorMessage.svelte';

	export let form: ActionData;

	$: if (form?.status == 200) {
		redirect(307, form.redirect);
	}

	onMount(async () => {
		const { Ripple, Input, Button, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Button });
	});
</script>

<RegisterHeader />
<Register />
<RegisterFooter />
{#if form}
	<FormErrorMessage message={form.message} />
{/if}
