import { Sort } from "@angular/material/sort";
import { Address, Organization, User } from "@db/prisma";

type UserWithRelations = User & {
  addresses: Address[];
  organizations: Organization[];
  followers: User[];
  following: User[];
};

export interface UserState {
  filter: {
    ownerId: string | null
    orgId: string | null,
  },
  selectedIds: string[],
  effectiveSelectedIds: string[],
  currentSort: Sort | null,
  selectedItemId: string | null,
  selectedItem: UserWithRelations | null;
  // selectionInList: SelectionModel<User>,
  addresses: Address[];
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
  effectiveSelectedIds: [],
  currentSort: null,
  selectedItemId: null,
  selectedItem: null,
  // selectionInList: new SelectionModel<User>(true, []),
	organizations: [],
	followers: [],
	following: [],
	addresses: [],
	loading: false,
	error: null,
};
