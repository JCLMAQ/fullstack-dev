import { faker } from '@faker-js/faker';
import { hash } from 'bcrypt';
import { PrismaClient, Role, User } from '../../generated/prisma/client';

interface BulkUserOptions {
  count: number;
  orgsIds: string[];
  passwordFaker?: string;
  addressPerUser?: number;
  phonesPerUser?: number;
  languages?: Array<{ id: number; code: string; name: string }>;
}

export const createBulkUsers = async (
  prisma: PrismaClient,
  options: BulkUserOptions
): Promise<User[]> => {
  const {
    count,
    orgsIds,
    passwordFaker = 'Pwd!123456',
    addressPerUser = 2,
    phonesPerUser = 2,
    languages = [],
  } = options;

  const users: User[] = [];

  // Hash the password once with bcrypt (same as authentication service)
  const pwdHash = await hash(passwordFaker, 10);

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ provider: 'example.com' });

    const randomLanguage = languages.length > 0 ? faker.helpers.arrayElement(languages) : null;

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        nickName: `${firstName[0]}${lastName}`.toUpperCase().substring(0, 10),
        dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        passWordFaker: passwordFaker,
        Gender: faker.helpers.arrayElement(['MALE', 'FEMELE', 'UNKNOWN', 'NONE']),
        photoUrl: faker.image.avatar(),
        jobTitle: faker.person.jobTitle(),
        position: faker.helpers.arrayElement(['Manager', 'Member', 'Individual', 'Secretary']),
        ...(randomLanguage && { languageId: randomLanguage.id }),
        Orgs: {
          connect: {
            id: faker.helpers.arrayElement(orgsIds),
          },
        },
        Roles: [Role.USER],
        Address: {
          create: Array.from({ length: addressPerUser }).map(() => ({
            street: faker.location.street(),
            buildingNum: faker.location.buildingNumber(),
            aptNum: faker.number.int({ min: 1, max: 999 }).toString(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
            countryIso: faker.location.countryCode('alpha-2'),
            addressType: faker.helpers.arrayElement(['Home', 'Work', 'Organisation', 'Other']),
            isPrimary: Math.random() < 0.3,
          })),
        },
        Phones: {
          create: Array.from({ length: phonesPerUser }).map(() => ({
            countryCode: faker.location.countryCode(),
            countryIso: faker.location.countryCode('alpha-2'),
            number: faker.phone.number(),
            phoneType: faker.helpers.arrayElement(['Mobile', 'Home', 'Work', 'Organisation', 'Other']),
            isPrimary: Math.random() < 0.3,
          })),
        },
        userSecret: {
          create: {
            pwdHash,
            isAdmin: false,
          },
        },
      },
    });

    users.push(user);

    if ((i + 1) % 10 === 0) {
      console.log(`Created ${i + 1} users...`);
    }
  }

  console.log(`✓ Created ${count} users with addresses and phones`);
  return users;
};
