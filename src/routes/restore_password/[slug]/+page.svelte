<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types.js';
	onMount(async () => {
		const { Ripple, Input, Button, initTE } = await import('tw-elements');
		initTE({ Ripple, Input, Button });
	});

	export let form: ActionData;
	export let data: PageData;
	const expired = (data as any).expired;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
	let password: string;
	let repeatedPassword: string;
	let isPasswordCompliant = false;
	let isPasswordEqualToRepeatedPassword = false;
	$: if (passwordRegex.test(password)) {
		isPasswordCompliant = true;
	} else {
		isPasswordCompliant = false;
	}

	$: if (password === repeatedPassword) {
		isPasswordEqualToRepeatedPassword = true;
	} else {
		isPasswordEqualToRepeatedPassword = false;
	}
</script>

{#if form?.expired || expired}
	<h1>The restoration link has expired</h1>
{:else}
	<form action="?/restore_password" method="post">
		<!--Password input-->
		<div class="relative mb-6" data-te-input-wrapper-init>
			<input
				type="password"
				name="password"
				bind:value={password}
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="inputPasswordId"
				placeholder="Password"
			/>
			<label
				for="inputPasswordId"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Password</label
			>
		</div>

		<!--Repeat password input-->
		<div class="relative mb-6" data-te-input-wrapper-init>
			<input
				type="password"
				bind:value={repeatedPassword}
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="repeatPasswordInputId"
				placeholder="Repeat password"
			/>
			<label
				for="repeatPasswordInputId"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Repeat Password</label
			>
		</div>
		<button
			type="submit"
			class="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:opacity-70 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
			disabled={!isPasswordCompliant || !isPasswordEqualToRepeatedPassword}
		>
			Restore password
		</button>
	</form>
{/if}
