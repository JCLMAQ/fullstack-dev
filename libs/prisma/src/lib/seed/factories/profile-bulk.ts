import { faker } from '@faker-js/faker';
import { PrismaClient } from '../../generated/prisma/client';

export const createProfiles = async (prisma: PrismaClient): Promise<any[]> => {
  const profiles: any[] = [];

  // Create 5 profiles that users can connect to
  for (let i = 0; i < 5; i++) {
    const profile = await prisma.profile.create({
      data: {
        orderProfile: i,
        bio: faker.person.bio(),
        published: true,
        isPublic: true,
      },
    });
    profiles.push(profile);
  }

  console.log(`✓ Created ${profiles.length} profiles`);
  return profiles;
};

export const assignProfilesToUsers = async (
  prisma: PrismaClient,
  users: any[],
  profiles: any[]
): Promise<void> => {
  for (const user of users) {
    const randomProfile = faker.helpers.arrayElement(profiles);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        Profiles: {
          connect: { id: randomProfile.id },
        },
      },
    });
  }

  console.log(`✓ Assigned profiles to ${users.length} users`);
};
