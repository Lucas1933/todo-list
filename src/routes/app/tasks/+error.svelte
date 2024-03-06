<script lang="ts">
	import errorLoadingTasksIcon from 'assets/icons/sad-circle-svgrepo-com.svg';
</script>

<div class="flex h-full flex-col items-center justify-center">
	<img class="w-32" src={errorLoadingTasksIcon} alt="" />
	<h1 class="text-center text-xl font-bold">
		An error ocurred while loading your tasks, please reload the page. If the problem persist try
		again later. <br /> Sorry for the inconvenience.
	</h1>
</div>
