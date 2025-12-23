import { faker } from '@faker-js/faker';
import { Organization, Prisma, PrismaClient } from '../../generated/prisma/client';

export const dataOrgDomain = (org: Organization, domainName: string, extension: string): Prisma.OrgDomainCreateInput => {

  // const domainName = faker.internet.domainWord();
  // const extension = faker.internet.domainSuffix();

    return {
      domainName,
      extension,
      org: { connect: { id: org.id } } };

};

export const createOrgDomain = async (i: number, iOrg: number, org: Organization, prisma: PrismaClient) => {
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
