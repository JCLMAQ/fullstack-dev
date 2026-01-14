import { faker } from '@faker-js/faker';
import { pbkdf2Sync, randomBytes } from 'crypto';
import { PrismaClient, Role, User } from '../../generated/prisma/client';

interface BulkUserOptions {
  count: number;
  orgsIds: string[];
  passwordFaker?: string;
  addressPerUser?: number;
  phonesPerUser?: number;
}

function hashPassword(plainTextPassword: string, salt: string): string {
  if (salt && plainTextPassword) {
    return pbkdf2Sync(plainTextPassword, Buffer.from(salt, 'base64'), 10000, 64, 'sha512').toString('base64');
  }
  return plainTextPassword;
}

export const createBulkUsers = async (
  prisma: PrismaClient,
  options: BulkUserOptions
): Promise<User[]> => {
  const {
    count,
    orgsIds,
    passwordFaker = 'Pwd!123465',
    addressPerUser = 2,
    phonesPerUser = 2,
  } = options;

  const users: User[] = [];

  // Create a salt and hash the password
  const salt = randomBytes(16).toString('base64');
  const pwdHash = hashPassword(passwordFaker, salt);

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ provider: 'example.com' });

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
        Orgs: {
          connect: {
            id: faker.helpers.arrayElement(orgsIds),
          },
        },
        Roles: [Role.USER],
        Address: {
          create: Array.from({ length: addressPerUser }).map(() => ({
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
            addressType: faker.helpers.arrayElement(['Home', 'Work', 'Organisation', 'Other']),
            isPrimary: Math.random() < 0.3,
          })),
        },
        Phones: {
          create: Array.from({ length: phonesPerUser }).map(() => ({
            countryCode: faker.location.countryCode(),
            number: faker.phone.number(),
            phoneType: faker.helpers.arrayElement(['Mobile', 'Home', 'Work', 'Organisation', 'Other']),
            isPrimary: Math.random() < 0.3,
          })),
        },
        userSecret: {
          create: {
            pwdHash,
            salt,
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
