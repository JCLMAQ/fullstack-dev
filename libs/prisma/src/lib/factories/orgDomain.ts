import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';
import { Organization, Prisma, PrismaClient } from '../generated/prisma/client';


const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });
export const dataOrgDomain = (org: Organization, domainName: string, extension: string): Prisma.OrgDomainCreateInput => {

  // const domainName = faker.internet.domainWord();
  // const extension = faker.internet.domainSuffix();

    return {
      domainName,
      extension,
      org: { connect: { id: org.id } } };

};

export const createOrgDomain = async (i: number, iOrg: number, org: Organization) => {
  console.log("Org. Domain: ", i.toString() + "/ Org: " + iOrg.toString())
  const domainName = faker.internet.domainWord();
  const extension = faker.internet.domainSuffix();

  const orgDomain = await prisma.orgDomain.create({
    data: {
      domainName,
      extension,
      org: { connect: { id: org.id } }
    }
  })
  return orgDomain
}
