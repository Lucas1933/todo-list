<script lang="ts">
	export let data;
</script>

<h1>Welcome {data.user_name}</h1>

<form method="POST" action="?/logout"><button>LogOut</button></form>
