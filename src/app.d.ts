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
	interface TaskForInsertion {
		name: string;
		description: string;
		started_at: Date;
		accomplish_before: Date;
		completed: boolean;
		owner: string;
	}
	interface TaskForUpdate {
		name: string;
		description: string;
		started_at: Date;
		accomplish_before: Date;
		completed: boolean;
	}
	interface TaskFromDb {
		name: string;
		description: string;
		started_at: Date;
		accomplish_before: Date;
		completed: boolean;
		owner: string;
		_id: Types.ObjectId;
	}
	interface Params extends RouteParams {
		slug: string;
	}
}

export {};
