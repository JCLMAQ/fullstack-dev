import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';
import { Prisma, PrismaClient, User } from '../generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });

export const dataStory = (user: User): Prisma.StoryCreateInput => {

  const caption = faker.lorem.paragraph();
    return {
      caption,
      user: { connect: { id: user.id } } };
};

export const createStory = async (iOrg: number, iUser: number, i: number, user: User) => {
  console.log("Story: ", i.toString() + "/ Org: " + iOrg.toString()+ "/User: " + iUser.toString())
      const story = await prisma.story.create({
        data: {
          caption: faker.lorem.paragraph(),
          user: { connect: { id: user.id } }
        }
      })
      return story
    }
