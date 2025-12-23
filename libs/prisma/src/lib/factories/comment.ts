import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';
import { Post, Prisma, PrismaClient, User } from '../generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });
// alternatively can make both as optional, and create new relations if absent
export const dataComment = (
  user: User,
  post: Post
): Prisma.CommentCreateInput => {
  const orderComment = faker.number.int(100);
  const content = faker.lorem.paragraph();
  const published = faker.datatype.boolean();
  return {
    orderComment,
    content,
    published,
    author: { connect: { id: user.id } },
    post: { connect: { id: post.id } },
  }

}

export const createComment = async (iOrg: number, iUser: number, iPost: number, i: number, user: User, post: Post) => {
    console.log("Comments: ", i, "/Org: ", iOrg,"/User: ", iUser,"/Post: ", iPost,);
      const comment = await prisma.comment.create({
        data: {
          orderComment: faker.number.int(100),
          content: faker.lorem.paragraph(),
          published: faker.datatype.boolean(),
          author: { connect: { id: user.id } },
          post: { connect: { id: post.id } },
        }
      })
      // console.log("Comment: ", comment)
    }
