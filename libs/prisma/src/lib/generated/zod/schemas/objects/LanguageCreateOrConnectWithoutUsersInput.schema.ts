import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageCreateWithoutUsersInputObjectSchema as LanguageCreateWithoutUsersInputObjectSchema } from './LanguageCreateWithoutUsersInput.schema';
import { LanguageUncheckedCreateWithoutUsersInputObjectSchema as LanguageUncheckedCreateWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const LanguageCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateOrConnectWithoutUsersInput>;
export const LanguageCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
