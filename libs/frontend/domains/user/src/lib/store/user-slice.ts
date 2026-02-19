import { Address, Organization, UserWithRelations } from '@db/prisma/frontend';



export interface UserState {
  filter: {
    ownerId: string | null;
    orgId: string | null;
  };
  addresses: Address[];
  organizations: Organization[];
  followers: UserWithRelations[];
  following: UserWithRelations[];
  loading: boolean;
  error: string | null;
}

export const initialUserState: UserState = {
  filter: {
    ownerId: 'test',
    orgId: 'test',
  },
  organizations: [],
  followers: [],
  following: [],
  addresses: [],
  loading: false,
  error: null,
};
