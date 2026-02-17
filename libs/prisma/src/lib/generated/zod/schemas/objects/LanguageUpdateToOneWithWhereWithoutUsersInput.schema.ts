import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema';
import { LanguageUpdateWithoutUsersInputObjectSchema as LanguageUpdateWithoutUsersInputObjectSchema } from './LanguageUpdateWithoutUsersInput.schema';
import { LanguageUncheckedUpdateWithoutUsersInputObjectSchema as LanguageUncheckedUpdateWithoutUsersInputObjectSchema } from './LanguageUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LanguageUpdateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const LanguageUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutUsersInput>;
export const LanguageUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
