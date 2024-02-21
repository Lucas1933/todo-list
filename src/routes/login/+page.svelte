<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import logo from 'assets/icons/favicon.png';

	export let form;

	onMount(async () => {
		const { Ripple, Input, initTE } = await import('tw-elements');
		initTE({ Ripple, Input });
	});
</script>

<div
	class="flex h-full grow flex-col items-center justify-start rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
>
	<div><img src={logo} class="mb-4 w-28" alt="" /></div>
	<h1 class="mb-4 text-xl">Simple To Do list</h1>
	<form
		class="w-full"
		method="POST"
		action="?/login"
		use:enhance={() => {
			return async ({ update }) => {
				update({ reset: false });
			};
		}}
	>
		<!--E-mail input-->
		<div class="relative mb-6" data-te-input-wrapper-init>
			<input
				type="email"
				name="email"
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
				id="emailInputId"
				placeholder="Enter email"
			/>
			<label
				for="emailInputId"
				class="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
				>Email address</label
			>
		</div>

		<!--Password input-->
		<div class="relative mb-6" data-te-input-wrapper-init>
			<input
				type="password"
				name="password"
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

		<!--Sign in button-->
		<button
			type="submit"
			class=" dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 t inline-block w-full rounded px-6 pb-2 pt-2.5 text-base font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
			data-te-ripple-init
			data-te-ripple-color="light"
		>
			Login
		</button>

		<!--Register link-->
		<p class="mt-6 text-center text-lg text-neutral-800 dark:text-neutral-200">
			Not a user yet?
			<a
				href="/register"
				class="text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-lg transition duration-150 ease-in-out"
				>Register</a
			>
		</p>

		<!-- Forgot password link -->
		<p class="mt-6 text-center text-lg text-neutral-800 dark:text-neutral-200">
			Forgot your password?
			<a
				href="/forgot_password"
				class="text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-lg transition duration-150 ease-in-out"
				>Restore password</a
			>
		</p>
	</form>
	<div>
		{#if form}
			<p class="text-xl font-bold text-red-600">{form?.message}</p>
		{/if}
	</div>
</div>
