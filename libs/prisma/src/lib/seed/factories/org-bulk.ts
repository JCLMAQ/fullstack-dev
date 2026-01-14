import { faker } from '@faker-js/faker';
import { Organization, Prisma, PrismaClient } from '../../generated/prisma/client';
import { dataOrgDomain } from './orgDomain';
import { dataOrgEmail } from './orgEmail';

// Create 3 Organizations

export const create3Orgs = async (prisma: PrismaClient) => {
  const orgs: Organization[] = [];

  const orgNames = ['TechCorp', 'InnovateLabs', 'FutureWorks'];
  const domains = ['techcorp', 'innovate', 'future'];
  const emails = ['info@techcorp.com', 'contact@innovate.io', 'hello@future.dev'];

  for (let i = 0; i < 3; i++) {
    const address = [
      { street: faker.location.street() },
      { buildingNumber: faker.location.buildingNumber() },
      { city: faker.location.city() },
      { country: faker.location.country() },
      { countryCode: faker.location.countryCode() },
    ] as Prisma.JsonArray;

    const org = await prisma.organization.create({
      data: {
        name: orgNames[i],
        emailITAdmin: faker.internet.email(),
        description: faker.lorem.paragraph(),
        address: address,
        webSite: faker.internet.domainName(),
      },
    });

    orgs.push(org);

    await prisma.orgDomain.create({
      data: dataOrgDomain(org, domains[i], 'com'),
    });

    await prisma.orgEmail.create({
      data: dataOrgEmail(org, emails[i]),
    });

    console.log(`Organization ${i + 1}: ${org.name}`);
  }

  return orgs;
};
