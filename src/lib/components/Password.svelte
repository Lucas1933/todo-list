<script lang="ts">
	export let isPasswordCompliant = false;
	export let isPasswordEqualToRepeatedPassword = false;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
	let password: string;
	let repeatedPassword: string;
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
		name="repeated_password"
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
