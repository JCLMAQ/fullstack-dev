import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema';
import { GroupUpdateWithoutMembersInputObjectSchema as GroupUpdateWithoutMembersInputObjectSchema } from './GroupUpdateWithoutMembersInput.schema';
import { GroupUncheckedUpdateWithoutMembersInputObjectSchema as GroupUncheckedUpdateWithoutMembersInputObjectSchema } from './GroupUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GroupUpdateWithoutMembersInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const GroupUpdateToOneWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutMembersInput>;
export const GroupUpdateToOneWithWhereWithoutMembersInputObjectZodSchema = makeSchema();
