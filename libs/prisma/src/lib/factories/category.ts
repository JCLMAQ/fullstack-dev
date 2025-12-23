import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';
import { Prisma, PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL'] || 'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });
export const dataCategory = (j: number): Prisma.CategoryCreateInput => {
  const orderCategory = faker.number.int(100);
  const name = 'Category ' + j.toString();
  return {
    orderCategory,
    name,
  }

}

export const createCategories = async (maxj: number) => {
  for (let j = 0; j < maxj; j++) {
    console.log("Category: ", j)
    const orderCategory = faker.number.int(100);
    const name = 'Category ' + j.toString();
    await prisma.category.create({
      data: {
        numSeq: j,
        orderCategory,
        name
      }
    })
  }
}
