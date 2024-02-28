<script lang="ts">
	import expiredIcon from 'assets/icons/expired-svgrepo-com.svg';
</script>

<div class="flex h-[70vh] flex-col items-center justify-center">
	<img src={expiredIcon} class="w-28" alt="" />
	<h1>The restoration link has expired</h1>
	<a
		href="auth/forgot_password"
		class="text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 text-lg transition duration-150 ease-in-out"
		>Request another one</a
	>
</div>
