import { Prisma } from '../../generated/prisma/client';

export function languageFactory(code: string, name: string): Prisma.LanguageCreateInput {
  return {
    code,
    name,
  };
}
