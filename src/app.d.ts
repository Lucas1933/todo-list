// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface ExtendedLocals {
		user: User;
	}
	type User = {
		_id?: string;
		user_name: string;
		email: string;
		password: string;
	};
	interface Params extends RouteParams {
		slug: string;
	}
}

export {};
