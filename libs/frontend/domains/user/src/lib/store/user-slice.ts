import { SelectionModel } from "@angular/cdk/collections";
import { Organization, User } from "@db/prisma";

export interface UserState {
  filter: {
    ownerId: string | null
    orgId: string | null,
  },
  selectedIds: string[],
  selection: SelectionModel<User>,
	selectedItem: User | null;
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
  selectedIds: [],
  selection: new SelectionModel<User>(true, []),
	selectedItem: null,
	organizations: [],
	followers: [],
	following: [],
	loading: false,
	error: null,
};
