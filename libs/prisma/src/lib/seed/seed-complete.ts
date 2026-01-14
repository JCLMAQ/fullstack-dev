import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import { createAppEmailDomain } from './factories/appemaildomain';
import { createCategories } from './factories/category';
import { createCommentsForPost } from './factories/comment-bulk';
import { dataImage } from './factories/image';
import { create3Orgs } from './factories/org-bulk';
import { createPost } from './factories/post';
import { dataPostLike } from './factories/postLike';
import { assignProfilesToUsers, createProfiles } from './factories/profile-bulk';
import { createStory } from './factories/story';
import { createTask } from './factories/task';
import { createTodo } from './factories/todo';
import { createBulkUsers } from './factories/user-bulk';
import { dataUserFollower } from './factories/userFollower';

const adapter = new PrismaPg({
  connectionString:
    process.env['DATABASE_URL'] ||
    'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting comprehensive seed with Faker...\n');

  // Step 1: App Email Domain
  console.log('📧 Setting up app email domains...');
  await createAppEmailDomain(prisma);

  // Step 2: Create 3 Organizations
  console.log('\n🏢 Creating 3 organizations...');
  const orgs = await create3Orgs(prisma);
  const orgIds = orgs.map((org) => org.id);

  // Step 3: Create 100 Users with addresses, phones
  console.log('\n👥 Creating 100 users with addresses and phones...');
  const users = await createBulkUsers(prisma, {
    count: 100,
    orgsIds: orgIds,
    addressPerUser: 2,
    phonesPerUser: 2,
  });

  // Step 3.5: Create profiles and assign to users
  console.log('\n👤 Creating profiles and assigning to users...');
  const profiles = await createProfiles(prisma);
  await assignProfilesToUsers(prisma, users, profiles);

  // Step 4: Create categories for posts
  console.log('\n📂 Creating post categories...');
  await createCategories(15, prisma);
  const categories = await prisma.category.findMany();

  // Step 5: Create posts, stories, todos, and tasks for each user
  console.log('\n📝 Creating posts, stories, todos, and tasks for each user...');

  for (let userIdx = 0; userIdx < users.length; userIdx++) {
    const user = users[userIdx];
    const userOrgs = await prisma.user.findUnique({
      where: { id: user.id },
      include: { Orgs: true },
    });

    if (!userOrgs?.Orgs || userOrgs.Orgs.length === 0) {
      console.warn(`⚠️  User ${user.email} has no organization`);
      continue;
    }

    const org = userOrgs.Orgs[0];

    // 10 Posts per user
    const userPosts: any[] = [];
    for (let postIdx = 0; postIdx < 10; postIdx++) {
      const category = faker.helpers.arrayElement(categories);
      const post = await createPost(0, userIdx, postIdx, org, user, category, prisma);
      userPosts.push(post);

      // Add 1-3 comments per post from random users
      const commentsPerPost = faker.number.int({ min: 1, max: 3 });
      await createCommentsForPost(post, users, commentsPerPost, prisma);
    }

    // 10 Todos per user with 2-3 tasks each
    for (let todoIdx = 0; todoIdx < 10; todoIdx++) {
      const todo = await createTodo(0, userIdx, todoIdx, org, user, prisma);

      const taskCount = faker.number.int({ min: 2, max: 3 });
      for (let taskIdx = 0; taskIdx < taskCount; taskIdx++) {
        const task = await createTask(0, userIdx, taskIdx, org, user, todoIdx, todo, prisma);

        // Create UserTaskLink
        try {
          await prisma.userTaskLink.create({
            data: {
              user: { connect: { id: user.id } },
              task: { connect: { id: task.id } },
              isAuthor: true,
              isAssigned: true,
              comment: faker.lorem.sentence(),
            },
          });
        } catch (e) {
          // Ignore duplicate errors
        }
      }

      // Create UserTodoLink
      try {
        await prisma.userTodoLink.create({
          data: {
            user: { connect: { id: user.id } },
            todo: { connect: { id: todo.id } },
            isAuthor: true,
            isAssigned: true,
            comment: faker.lorem.sentence(),
          },
        });
      } catch (e) {
        // Ignore duplicate errors
      }
    }

    // 3-5 Stories per user with 1 image each
    const storyCount = faker.number.int({ min: 3, max: 5 });
    for (let storyIdx = 0; storyIdx < storyCount; storyIdx++) {
      const story = await createStory(0, userIdx, storyIdx, user, prisma);
      await prisma.image.create({
        data: dataImage(story.id, 'story', storyIdx),
      });
    }

    if ((userIdx + 1) % 10 === 0) {
      console.log(`✓ Completed content for ${userIdx + 1} users...`);
    }
  }

  console.log('\n👫 Setting up followers and following relationships...');
  // Create follower relationships: each user follows 5-15 random other users
  for (let i = 0; i < users.length; i++) {
    const followerCount = faker.number.int({ min: 5, max: 15 });
    const followingIndices = faker.helpers.shuffle([...Array(users.length).keys()]).slice(0, followerCount);

    for (const followingIdx of followingIndices) {
      if (i !== followingIdx) {
        try {
          await prisma.userFollowerLink.create({
            data: dataUserFollower(users[i], users[followingIdx]),
          });
        } catch (e) {
          // Ignore duplicate relationship errors
        }
      }
    }

    if ((i + 1) % 20 === 0) {
      console.log(`✓ Set up followers for ${i + 1} users...`);
    }
  }

  console.log('\n❤️  Setting up post likes...');
  // Each user likes 10-30 random posts
  const allPosts = await prisma.post.findMany();

  for (let i = 0; i < users.length; i++) {
    const likeCount = Math.min(faker.number.int({ min: 10, max: 30 }), allPosts.length);
    const postIndices = faker.helpers.shuffle([...Array(allPosts.length).keys()]).slice(0, likeCount);

    for (const postIdx of postIndices) {
      try {
        await prisma.userPostLikeLink.create({
          data: dataPostLike(users[i], allPosts[postIdx]),
        });
      } catch (e) {
        // Ignore duplicate like errors
      }
    }

    if ((i + 1) % 20 === 0) {
      console.log(`✓ Set up likes for ${i + 1} users...`);
    }
  }

  // Summary
  console.log('\n✅ Seed completed successfully!\n');
  console.log('📊 Summary:');
  console.log(`  • Organizations: ${orgs.length}`);
  console.log(`  • Users: ${users.length}`);
  console.log(`  • Profiles: ${profiles.length}`);
  console.log(`  • Posts: ~${users.length * 10}`);
  console.log(`  • Comments: ~${users.length * 10 * 2}`);
  console.log(`  • Todos: ~${users.length * 10}`);
  console.log(`  • Tasks: ~${users.length * 10 * 2.5}`);
  console.log(`  • UserTodoLinks: ~${users.length * 10}`);
  console.log(`  • UserTaskLinks: ~${users.length * 10 * 2.5}`);
  console.log(`  • Stories: ~${users.length * 4}`);
  console.log(`  • Images: ~${users.length * 4}`);
  console.log(`  • Categories: ${categories.length}`);
  console.log(`\n🔐 Default password for all users: Pwd!123465`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
