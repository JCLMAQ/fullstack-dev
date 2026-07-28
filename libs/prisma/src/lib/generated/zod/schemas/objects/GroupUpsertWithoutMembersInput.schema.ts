import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupUpdateWithoutMembersInputObjectSchema as GroupUpdateWithoutMembersInputObjectSchema } from './GroupUpdateWithoutMembersInput.schema';
import { GroupUncheckedUpdateWithoutMembersInputObjectSchema as GroupUncheckedUpdateWithoutMembersInputObjectSchema } from './GroupUncheckedUpdateWithoutMembersInput.schema';
import { GroupCreateWithoutMembersInputObjectSchema as GroupCreateWithoutMembersInputObjectSchema } from './GroupCreateWithoutMembersInput.schema';
import { GroupUncheckedCreateWithoutMembersInputObjectSchema as GroupUncheckedCreateWithoutMembersInputObjectSchema } from './GroupUncheckedCreateWithoutMembersInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GroupUpdateWithoutMembersInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutMembersInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutMembersInputObjectSchema)]),
  where: z.lazy(() => GroupWhereInputObjectSchema).optional()
}).strict();
export const GroupUpsertWithoutMembersInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithoutMembersInput>;
export const GroupUpsertWithoutMembersInputObjectZodSchema = makeSchema();
