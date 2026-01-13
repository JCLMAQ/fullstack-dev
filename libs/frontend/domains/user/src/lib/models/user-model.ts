import { Address, Organization, User } from "@db/prisma";

export type UserWithRelations = User & {
  addresses: Address[];
  organizations: Organization[];
  followers: User[];
  following: User[];
};
