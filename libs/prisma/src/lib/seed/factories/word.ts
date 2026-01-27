import { DictioEntryType, Prisma, PrismaClient } from '../../generated/prisma/client';

export const dataWord = (
  slug: string,
  type: DictioEntryType = DictioEntryType.WORD
): Prisma.WordCreateInput => {
  return {
    slug,
    type,
  };
};

export const createWord = async (
  slug: string,
  type: DictioEntryType,
  prisma: PrismaClient
) => {
  return await prisma.word.create({
    data: {
      slug,
      type,
    },
  });
};
