import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';
import { Category, Organization, PrismaClient, User } from '../generated/prisma/client';


const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });

export const createPost = async (iOrg: number,iUser: number, z: number, org: Organization, user: User, cat: Category) => {

  console.log("Posts: ",z,"/Org: ", iOrg,"/User: ", iUser);

    const post = await prisma.post.create({
      data: {
        title: 'post : '+ z.toString + "/ Org: " + iOrg.toString()+ "/User: " + iUser.toString()  ,
        content : faker.lorem.paragraph(),
        published : faker.datatype.boolean(),
        orderPost : faker.number.int(100),
        org: { connect: { id: org.id }},
        owner: { connect: { id: user.id } },
        Categories: { connect: { id: cat.id}}
      }
    })
    return post
  }
