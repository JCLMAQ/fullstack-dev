import { Prisma, PrismaClient } from '../../generated/prisma/client';

export const dataTranslation = (
  wordId: number,
  languageId: number,
  text: string,
  definition?: string
): Prisma.TranslationCreateInput => {
  return {
    text,
    definition,
    word: {
      connect: { id: wordId },
    },
    language: {
      connect: { id: languageId },
    },
  };
};

export const createTranslation = async (
  wordId: number,
  languageId: number,
  text: string,
  definition: string | undefined,
  prisma: PrismaClient
) => {
  return await prisma.translation.create({
    data: {
      text,
      definition,
      word: {
        connect: { id: wordId },
      },
      language: {
        connect: { id: languageId },
      },
    },
  });
};
