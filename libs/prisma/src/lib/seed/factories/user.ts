
import { faker } from '@faker-js/faker';
import { hash } from 'bcrypt';
import { PrismaClient, Role, User } from '../../generated/prisma/client';

// create the 4 user: 3 attached to the Org1 and one to the Org2

export const create4Users = async (prisma: PrismaClient) => {
 const users: User[] = [];

  const orgs = await prisma.organization.findMany();

  const passWordFaker = 'Azerty123456789##';

  // Hash the password once with bcrypt (same as authentication service)
  const pwdHash = await hash(passWordFaker, 10);


  const user1 = await prisma.user.create({
    data: {
      email: 'alice@prisma.io',
      firstName: 'alice',
      lastName: 'Merveille',
      nickName: 'ALMER',
      dateOfBirth: faker.date.birthdate(),
      passWordFaker: passWordFaker,
      Orgs: { connect: { id: orgs[0].id } },
      Roles: [Role.USER],
      userSecret: {
        create: {
          pwdHash: pwdHash,
          isAdmin: false
        }
      }
    },
  })
  users.push(user1);
  console.log("User 1: ", user1);

  const user2 =await prisma.user.create({
    data: {
      firstName: 'bob',
      lastName: 'Morane',
      email: 'bob@prisma.io',
      nickName: 'MOBOB',
      passWordFaker: passWordFaker,
      dateOfBirth: faker.date.birthdate(),
      Orgs: { connect: { id: orgs[0].id } },
      Roles: [Role.USER],
      userSecret: {
        create: {
          pwdHash: pwdHash,
          isAdmin: false
        }
      }
    },
  })
  users.push(user2);
  console.log("User 2: ", user2);

  const user3 =await prisma.user.create({
    data: {
      firstName: 'Toi',
      lastName: 'TOIT',
      email: 'toi@toit.be',
      nickName: 'TOITOI',
      passWordFaker: passWordFaker,
      dateOfBirth: faker.date.birthdate(),
      Orgs: { connect: { id: orgs[0].id } },
      Roles: [Role.USER],
      userSecret: {
        create: {
          pwdHash: pwdHash,
          isAdmin: false
        }
      }
    },
  })
  users.push(user3);
  console.log("User 3: ", user3);

  const user4 =await prisma.user.create({
    data: {
      firstName: 'Moi',
      lastName: 'MAQ',
      email: 'jcm@jcm.be',
      nickName: 'JCM',
      passWordFaker: passWordFaker,
      dateOfBirth: faker.date.birthdate(),
      Orgs: { connect: { id: orgs[1].id } },
      Roles: [Role.ADMIN],
      userSecret: {
        create: {
          pwdHash: pwdHash,
          isAdmin: true
        }
      }
    },
  })
  users.push(user4);
  console.log("User 4: ", user4);

  return users
};

