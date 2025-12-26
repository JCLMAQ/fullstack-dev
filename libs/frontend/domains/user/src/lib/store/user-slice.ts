import { Organization, User } from "@db/prisma";

export interface UserState {
	selectedUser: User | null;
	organizations: Organization[];
	followers: User[];
	following: User[];
	loading: boolean;
	error: string | null;
}

export const initialUserState: UserState = {
	selectedUser: null,
	organizations: [],
	followers: [],
	following: [],
	loading: false,
	error: null,
};
