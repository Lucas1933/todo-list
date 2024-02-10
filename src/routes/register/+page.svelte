<script lang="ts">
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

<div>
	<form method="POST" action="?/register">
		<label for="">User name</label>
		<input type="text" name="user_name" />
		<label for="">Email</label>
		<input name="email" type="email" />
		<label for="">Password</label>
		<input type="text" name="password" bind:value={password} />
		<label for="">Repeat password</label>
		<input type="text" bind:value={repeatedPassword} />
		<button disabled={!isPasswordCompliant || !isPasswordEqualToRepeatedPassword}>Register</button>
	</form>
</div>

<div>
	<p>the password must be: <br /></p>
	<ul>
		<li>At least 6 characters long</li>
		<li>It should contain at least one lowercase letter</li>
		<li>It should contain at least one uppercase letter</li>
		<li>It should contain at least one digit</li>
	</ul>
</div>
