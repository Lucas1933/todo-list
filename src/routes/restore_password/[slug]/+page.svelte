<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types.js';
	import Password from '$lib/components/Password.svelte';

	export let form: ActionData;
	export let data: PageData;
	let isPasswordCompliant = false;
	let isPasswordEqualToRepeatedPassword = false;
	const expired = (data as any).expired;

	onMount(async () => {
		const { Ripple, Input, Button, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Button });
	});
</script>

{#if form?.expired || expired}
	<h1>The restoration link has expired</h1>
{:else}
	<form action="?/restore_password" method="post">
		<Password bind:isPasswordCompliant bind:isPasswordEqualToRepeatedPassword />
		<button
			type="submit"
			class="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:opacity-70 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
			disabled={!isPasswordCompliant || !isPasswordEqualToRepeatedPassword}
		>
			Restore password
		</button>
	</form>
{/if}
