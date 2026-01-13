import { Address, Organization, User } from "./generated/prisma/client";

export type UserWithRelations = User & {
  Address: Address[];
  Orgs: Organization[];
  Followers: Array<{ user: User }>;
  Followings: Array<{ follower: User }>;
};

export { };

