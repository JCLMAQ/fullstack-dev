import { faker } from '@faker-js/faker';
import { Post, PrismaClient, User } from '../../generated/prisma/client';

export const createCommentsForPost = async (
  post: Post,
  users: User[],
  commentsPerPost: number,
  prisma: PrismaClient
): Promise<void> => {
  // Get random comments from different users (avoid post owner commenting their own post)
  const postOwner = post.ownerId;
  const eligibleUsers = users.filter((u) => u.id !== postOwner);

  const selectedUsers = faker.helpers
    .shuffle(eligibleUsers)
    .slice(0, Math.min(commentsPerPost, eligibleUsers.length));

  for (const user of selectedUsers) {
    await prisma.comment.create({
      data: {
        orderComment: faker.number.int(100),
        content: faker.lorem.sentences({ min: 1, max: 3 }),
        published: faker.datatype.boolean({ likelihood: 80 }),
        author: { connect: { id: user.id } },
        post: { connect: { id: post.id } },
      },
    });
  }
};
