import { Sort } from "@angular/material/sort";
import { Address, Organization, User, UserWithRelations } from "@db/prisma";



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
	organizations: [],
	followers: [],
	following: [],
	addresses: [],
	loading: false,
	error: null,
};
