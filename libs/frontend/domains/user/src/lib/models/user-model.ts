import { Address, Organization, User } from "@db/prisma";

export type UserWithRelations = User & {
  Address: Address[];
  Orgs: Organization[];
  Followers: User[];
  Followings: User[];
};
