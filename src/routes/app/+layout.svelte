<script lang="ts">
	import logo from 'assets/icons/favicon.png';
	import profileIcon from 'assets/icons/profile-round-1342-svgrepo-com.svg';
</script>

<nav
	class="flex justify-around rounded-lg border-b-2 bg-white p-2 pt-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
>
	<a href="/app/tasks" class="flex flex-col">
		<img src={logo} class="w-11" alt="" />
		<span>Tasks</span>
	</a>
	<a href="/app/profile" class="flex flex-col">
		<img src={profileIcon} class="w-11" alt="" />
		<span>Profile</span>
	</a>
</nav>

<slot />
