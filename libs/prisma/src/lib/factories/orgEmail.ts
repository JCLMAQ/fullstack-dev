import { faker } from "@faker-js/faker";
import { PrismaPg } from '@prisma/adapter-pg';
import { Organization, Prisma, PrismaClient } from '../generated/prisma/client';
import { dataOrgEmailUseTo } from './orgEmailUseTo';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });

export const dataOrgEmail = (org: Organization, orgEmail: string): Prisma.OrgEmailCreateInput => {

  const email = faker.internet.email();
  const description = faker.lorem.paragraph();
 // const orgEmailUseTo =

    return {
      email: orgEmail,
      description,
      org: { connect: { id: org.id } }
    };
  };

  export const createOrgEmail = async (i: number, iOrg: number, org: Organization) => {
    console.log("Org. Domain: ", i.toString() + "/ Org: " + iOrg.toString())

    const email = faker.internet.email();
    const description = faker.lorem.paragraph();

    const orgEmail = await prisma.orgEmail.create({
      data: {
        email,
        description,
        org: { connect: { id: org.id } }
      }
    })
    // Email use to
    await prisma.orgEmailUseTo.create({
      data: dataOrgEmailUseTo(orgEmail)
    });

    return orgEmail
  }

