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
		user: UserForCookie;
	}
	type UserFromDb = {
		_id: string;
		user_name: string;
		email: string;
		password: string;
	};
	type UserForInsertion = {
		user_name: string;
		email: string;
		password: string;
	};

	type UserForCookie = {
		_id: string;
		user_name: string;
		email: string;
	};
	interface Params extends RouteParams {
		slug: string;
	}
}

export {};
