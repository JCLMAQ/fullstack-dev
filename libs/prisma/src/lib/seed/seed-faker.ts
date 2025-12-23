// import { PrismaClient } from '@prisma/prisma-client-new';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import { createAppEmailDomain } from './factories/appemaildomain';
import { createCategories } from './factories/category';
import { createComment } from './factories/comment';
import { createGroup } from './factories/group';
import { dataImage } from './factories/image';
import { create2Orgs } from './factories/org';
import { createPost } from './factories/post';
import { dataPostLike } from './factories/postLike';
import { createStory } from './factories/story';
import { createTask } from './factories/task';
import { createTodo } from './factories/todo';
import { create4Users } from './factories/user';
import { dataUserFollower } from './factories/userFollower';


const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });


async function main() {
  // const orgs: Organization[] = [];
  // const users: User[] = [];
  // const posts: Post[] = [];
  // const tasks: Task[]= []

  // App Email Domain Allowed
  await createAppEmailDomain(prisma)

  // Create two Organization
  const orgs = await create2Orgs(prisma);
  // const orgs = await prisma.organization.findMany();

  // Create 4 users
  const users = await create4Users(prisma);
  // const users = await prisma.user.findMany();

 // Create Categories for Post
  await createCategories(10, prisma);
  const categories = await prisma.category.findMany();

  // Create posts, groups and tasks linked to user and Organization
  let iOrg = 0;
  let iUser= 0;
  for ( let org of orgs) { // 2 Organizations
    iOrg = iOrg+1;
    const usersFound = await prisma.user.findMany( { where: { Orgs: { every: { id: org.id}}}}) //where: { enrollmentCourse: { every: { userId: user.id } } },
    for ( let user of usersFound) { // 4 users
        iUser = iUser+1;
        // each user has 2 posts
        for (let z = 0; z < 2; z++) {
          // Create Post and assign one Category
          const post = await createPost(iOrg, iUser ,z, org, user, categories[iUser], prisma);
            // Each Post has 2 comments:
            for(let j=0; j<0; j++) {
              await createComment(iOrg, iUser ,z, j, user, post, prisma);
            };
        };

        // each user has 2 todo
        for (let x = 0; x < 2; x++) {
          const todo = await createTodo(iOrg, iUser , x, org, user, prisma)
          // each todo has two task:
          for( let m=0; m<2; m++) {
            const task = await createTask(iOrg, iUser, m, org, user, x , todo, prisma )
          }
        };



        // each user has 2 stories
        for (let j = 0; j < 2; j++) {
          const story = await createStory(iOrg, iUser , j , user, prisma);

          // each story has 1 image
          await prisma.image.create({ data: dataImage(story.id, "story", j) });
        };

       // create 2 groups per user
        for (let k = 0; k < 2; k++) {
          await createGroup(k, iOrg, iUser, org, user, prisma);
        }

        // Assign Task to users

    }
}
// let's make first 2 users follow each other
await prisma.userFollower.create({
  data: dataUserFollower(users[0], users[1]),
});
await prisma.userFollower.create({
  data: dataUserFollower(users[1], users[0]),
});

const posts = await prisma.post.findMany();

//let's make the second user likes 3 post of first user
for (let i = 0; i < 3; i++) {
  await prisma.postLike.create({ data: dataPostLike(users[1], posts[i]) });
}

}

main().catch(e => {
    console.log(e);
    process.exit(1);
  }).finally(async () => {
    await  prisma.$disconnect()
})

