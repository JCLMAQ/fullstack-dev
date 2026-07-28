import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateWithoutUsersInputObjectSchema as LanguageCreateWithoutUsersInputObjectSchema } from './LanguageCreateWithoutUsersInput.schema';
import { LanguageUncheckedCreateWithoutUsersInputObjectSchema as LanguageUncheckedCreateWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateWithoutUsersInput.schema';
import { LanguageCreateOrConnectWithoutUsersInputObjectSchema as LanguageCreateOrConnectWithoutUsersInputObjectSchema } from './LanguageCreateOrConnectWithoutUsersInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LanguageCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => LanguageWhereUniqueInputObjectSchema).optional()
}).strict();
export const LanguageCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateNestedOneWithoutUsersInput>;
export const LanguageCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
