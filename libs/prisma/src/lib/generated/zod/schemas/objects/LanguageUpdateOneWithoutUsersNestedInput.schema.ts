import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateWithoutUsersInputObjectSchema as LanguageCreateWithoutUsersInputObjectSchema } from './LanguageCreateWithoutUsersInput.schema';
import { LanguageUncheckedCreateWithoutUsersInputObjectSchema as LanguageUncheckedCreateWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateWithoutUsersInput.schema';
import { LanguageCreateOrConnectWithoutUsersInputObjectSchema as LanguageCreateOrConnectWithoutUsersInputObjectSchema } from './LanguageCreateOrConnectWithoutUsersInput.schema';
import { LanguageUpsertWithoutUsersInputObjectSchema as LanguageUpsertWithoutUsersInputObjectSchema } from './LanguageUpsertWithoutUsersInput.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateToOneWithWhereWithoutUsersInputObjectSchema as LanguageUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './LanguageUpdateToOneWithWhereWithoutUsersInput.schema';
import { LanguageUpdateWithoutUsersInputObjectSchema as LanguageUpdateWithoutUsersInputObjectSchema } from './LanguageUpdateWithoutUsersInput.schema';
import { LanguageUncheckedUpdateWithoutUsersInputObjectSchema as LanguageUncheckedUpdateWithoutUsersInputObjectSchema } from './LanguageUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LanguageCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => LanguageUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => LanguageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => LanguageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => LanguageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LanguageUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => LanguageUpdateWithoutUsersInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const LanguageUpdateOneWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.LanguageUpdateOneWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateOneWithoutUsersNestedInput>;
export const LanguageUpdateOneWithoutUsersNestedInputObjectZodSchema = makeSchema();
