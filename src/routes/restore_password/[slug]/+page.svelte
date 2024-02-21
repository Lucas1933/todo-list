<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types.js';
	import Password from '$lib/components/Password.svelte';
	import expiredIcon from 'assets/icons/expired-svgrepo-com.svg';
	import passwordIcon from 'assets/icons/password-protection-privacy-access-verification-code-svgrepo-com.svg';
	import successIcon from 'assets/icons/like-thumb-hand-success-svgrepo-com.svg';

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
	<div class="flex h-[70vh] flex-col items-center justify-center">
		<img src={expiredIcon} class="w-28" alt="" />
		<h1>The restoration link has expired</h1>
		<a
			href="/forgot_password"
			class="text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-lg transition duration-150 ease-in-out"
			>Request another one</a
		>
	</div>
{:else if !form?.success}
	<div class="flex h-[70vh] flex-col items-center justify-center">
		<img src={passwordIcon} class="mb-5 w-28" alt="" />

		<form action="?/restore_password" method="post" class="w-full px-10">
			<Password bind:isPasswordCompliant bind:isPasswordEqualToRepeatedPassword />
			<button
				type="submit"
				class="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block w-full rounded px-8 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:opacity-70 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				disabled={!isPasswordCompliant || !isPasswordEqualToRepeatedPassword}
			>
				Restore password
			</button>
		</form>
		<div class="mt-5 flex flex-col items-center">
			{#if form}
				<h1>{form?.message}</h1>
			{/if}
			<p>the password must be: <br /></p>
			<ul class="list-disc">
				<li>At least 6 characters long</li>
				<li>It should contain at least one lowercase letter</li>
				<li>It should contain at least one uppercase letter</li>
				<li>It should contain at least one digit</li>
			</ul>
		</div>
	</div>
{:else}
	<div class="flex h-[70vh] flex-col items-center justify-center">
		<img src={successIcon} alt="" class="my-6 w-28" />
		<h1 class="px-4 text-center text-base">
			Your password has been restored! please go to the login page.
			<a
				href="/login"
				class="text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-lg transition duration-150 ease-in-out"
				>Login</a
			>
		</h1>
	</div>
{/if}
