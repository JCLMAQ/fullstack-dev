import { Prisma, User } from '../../generated/prisma/client';

// alternatively can make both as optional, and create new relations if absent
export const dataUserFollower = (
  user: User,
  follower: User
): Prisma.UserFollowerLinkCreateInput => ({
  user: { connect: { id: user.id } },
  follower: { connect: { id: follower.id } },
});
