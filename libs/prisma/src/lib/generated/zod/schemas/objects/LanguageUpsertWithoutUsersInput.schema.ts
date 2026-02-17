import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { LanguageUpdateWithoutUsersInputObjectSchema as LanguageUpdateWithoutUsersInputObjectSchema } from './LanguageUpdateWithoutUsersInput.schema';
import { LanguageUncheckedUpdateWithoutUsersInputObjectSchema as LanguageUncheckedUpdateWithoutUsersInputObjectSchema } from './LanguageUncheckedUpdateWithoutUsersInput.schema';
import { LanguageCreateWithoutUsersInputObjectSchema as LanguageCreateWithoutUsersInputObjectSchema } from './LanguageCreateWithoutUsersInput.schema';
import { LanguageUncheckedCreateWithoutUsersInputObjectSchema as LanguageUncheckedCreateWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateWithoutUsersInput.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LanguageUpdateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => LanguageWhereInputObjectSchema).optional()
}).strict();
export const LanguageUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpsertWithoutUsersInput>;
export const LanguageUpsertWithoutUsersInputObjectZodSchema = makeSchema();
