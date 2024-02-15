type User = {
	_id?: string;
	user_name: string;
	email: string;
	password: string;
};

interface ExtendedLocals {
	user: User;
}
