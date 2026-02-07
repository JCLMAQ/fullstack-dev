import { Address, Organization, User, UserWithRelations } from "@db/prisma";



export interface UserState {
  filter: {
    ownerId: string | null
    orgId: string | null,
  },
  selectedIds: string[],
  effectiveSelectedIds: string[],
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
  selectedItemId: null,
  selectedItem: null,
	organizations: [],
	followers: [],
	following: [],
	addresses: [],
	loading: false,
	error: null,
};
