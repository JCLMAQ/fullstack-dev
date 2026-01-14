import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaPg({
  connectionString:
    process.env['DATABASE_URL'] ||
    'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });

async function verifySeed() {
  console.log('🔍 Vérification des données du seed...\n');

  try {
    const orgCount = await prisma.organization.count();
    const userCount = await prisma.user.count();
    const profileCount = await prisma.profile.count();
    const postCount = await prisma.post.count();
    const commentCount = await prisma.comment.count();
    const todoCount = await prisma.todo.count();
    const taskCount = await prisma.task.count();
    const userTodoLinkCount = await prisma.userTodoLink.count();
    const userTaskLinkCount = await prisma.userTaskLink.count();
    const storyCount = await prisma.story.count();
    const imageCount = await prisma.image.count();
    const categoryCount = await prisma.category.count();
    const followerCount = await prisma.userFollowerLink.count();
    const likeCount = await prisma.userPostLikeLink.count();

    console.log('📊 Statistiques de la base de données:\n');
    console.log(`  ✓ Organizations: ${orgCount} (attendu: 3)`);
    console.log(`  ✓ Users: ${userCount} (attendu: 100)`);
    console.log(`  ✓ Profiles: ${profileCount} (attendu: 5)`);
    console.log(`  ✓ Posts: ${postCount} (attendu: ~1000)`);
    console.log(`  ✓ Comments: ${commentCount} (attendu: ~2000)`);
    console.log(`  ✓ Todos: ${todoCount} (attendu: ~1000)`);
    console.log(`  ✓ Tasks: ${taskCount} (attendu: ~2500)`);
    console.log(`  ✓ UserTodoLinks: ${userTodoLinkCount} (attendu: ~1000)`);
    console.log(`  ✓ UserTaskLinks: ${userTaskLinkCount} (attendu: ~2500)`);
    console.log(`  ✓ Stories: ${storyCount} (attendu: ~400)`);
    console.log(`  ✓ Images: ${imageCount} (attendu: ~400)`);
    console.log(`  ✓ Categories: ${categoryCount} (attendu: 15)`);
    console.log(`  ✓ Followers: ${followerCount} (attendu: ~500)`);
    console.log(`  ✓ Post Likes: ${likeCount} (attendu: ~1000)`);

    // Check if users have profiles
    const usersWithProfiles = await prisma.user.findMany({
      where: { Profiles: { some: {} } },
    });
    console.log(`\n  ✓ Users with profiles: ${usersWithProfiles.length}/${userCount}`);

    // Check if posts have comments
    const postsWithComments = await prisma.post.findMany({
      where: { Comments: { some: {} } },
    });
    console.log(`  ✓ Posts with comments: ${postsWithComments.length}/${postCount}`);

    // Check if todos have UserTodoLink
    const todosWithLinks = await prisma.todo.findMany({
      where: { Users: { some: {} } },
    });
    console.log(`  ✓ Todos with UserTodoLinks: ${todosWithLinks.length}/${todoCount}`);

    // Check if tasks have UserTaskLink
    const tasksWithLinks = await prisma.task.findMany({
      where: { Users: { some: {} } },
    });
    console.log(`  ✓ Tasks with UserTaskLinks: ${tasksWithLinks.length}/${taskCount}`);

    // Verify password consistency
    const users = await prisma.user.findMany({
      select: { email: true, passWordFaker: true },
      take: 5,
    });
    const allSamePassword = users.every((u) => u.passWordFaker === 'Pwd!123465');
    console.log(`\n  ✓ Tous les utilisateurs ont le même mot de passe: ${allSamePassword}`);
    console.log(`    Mot de passe test: ${users[0]?.passWordFaker}\n`);

    console.log('✅ Vérification complète!\n');
  } catch (error) {
    console.error('❌ Erreur lors de la vérification:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifySeed();
