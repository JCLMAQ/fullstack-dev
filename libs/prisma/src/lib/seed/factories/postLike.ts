import { Post, Prisma, User } from '../../generated/prisma/client';

// alternatively can make both as optional, and create new relations if absent
export const dataPostLike = (
  user: User,
  post: Post
): Prisma.UserPostLikeLinkCreateInput => ({
  user: { connect: { id: user.id } },
  post: { connect: { id: post.id } },
});
