<script lang="ts">
	export let data;
</script>

<h1>Welcome {data.user_name}</h1>

<form method="POST" action="?/logout"><button>LogOut</button></form>
<form method="POST" action="?/delete_account">
	<button class="bg-red-500">DELETE ACCOUNT</button>
</form>
