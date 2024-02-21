<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import forgotPasswordImg from 'assets/images/forgot-password-concept-illustration_114360-1123.avif';
	import emailSendedIcon from 'assets/icons/email-envelope-letter-message-check-confirm-svgrepo-com.svg';

	export let form;

	onMount(async () => {
		const { Ripple, Input, initTE } = await import('tw-elements');
		initTE({ Ripple, Input });
	});
</script>

{#if form?.succes}
	<div class="flex h-full flex-col items-center justify-center pb-28">
		<img src={emailSendedIcon} class="w-28" alt="" />
		<h1 class="p-5 text-center">The email was sent! if you dont see it please check your spam</h1>
	</div>
{:else}
	<div>
		<img src={forgotPasswordImg} alt="" />
		<h1 class="px-5 text-base">
			Forgot your password? Enter your email below so we can help you to restore it!
		</h1>
	</div>

	<form
		action="?/restore_password"
		method="POST"
		class="p-5"
		use:enhance={() => {
			return async ({ update }) => {
				update({ reset: false });
			};
		}}
	>
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
		<button
			type="submit"
			class=" dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 t inline-block w-full rounded px-6 pb-2 pt-2.5 text-base font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
			data-te-ripple-init
			data-te-ripple-color="light"
		>
			Send link
		</button>
	</form>

	<div>
		{#if form}
			<p class="text-center text-xl font-bold text-red-600">{form?.message}</p>
		{/if}
	</div>
{/if}
