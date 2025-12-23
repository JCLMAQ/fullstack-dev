import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';
import { Prisma, PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });

export const dataAppEmailDomain = (): Prisma.AppEmailDomainCreateInput => ({
  domain: faker.internet.domainName(),
  allowed: faker.datatype.boolean()
});

export const createAppEmailDomain = async () => {
  const domain = faker.internet.domainName()
  const allowed = faker.datatype.boolean()
  console.log("AppEmailDomain: ",domain, "Allowed: ", allowed)
  const appEmailDomain = await prisma.appEmailDomain.create({
    data: {
      domain,
      allowed
    }
  })
  return appEmailDomain
}

