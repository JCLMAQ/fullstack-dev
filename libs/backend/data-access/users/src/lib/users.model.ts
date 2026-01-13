import { Address, Organization, User } from "@db/prisma";

export type UserWithRelations = User & {
  Address: Address[];
  Orgs: Organization[];
  Followers: Array<{ user: User }>;
  Followings: Array<{ follower: User }>;
};
