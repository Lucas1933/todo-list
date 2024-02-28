<script lang="ts">
	import Password from '$lib/components/Password.svelte';
	import passwordIcon from 'assets/icons/password-protection-privacy-access-verification-code-svgrepo-com.svg';

	let isPasswordCompliant = false;
	let isPasswordEqualToRepeatedPassword = false;
</script>

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
