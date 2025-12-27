import { SelectionModel } from "@angular/cdk/collections";
import { Organization, User } from "@db/prisma";

export interface UserState {
  filter: {
    ownerId: string | null
    orgId: string | null,
  },
  selectedId: string | null,
  selectedIds: string[],
  selection: SelectionModel<User>,
  todoLoaded: boolean;
	selectedUser: User | null;
	organizations: Organization[];
	followers: User[];
	following: User[];
	loading: boolean;
	error: string | null;
}

export const initialUserState: UserState = {
  filter: {
    ownerId: "test",
    orgId: "test"
  },
  selectedId: null,
  selectedIds: [],
  selection: new SelectionModel<User>(true, []),
  todoLoaded: false,
	selectedUser: null,
	organizations: [],
	followers: [],
	following: [],
	loading: false,
	error: null,
};
