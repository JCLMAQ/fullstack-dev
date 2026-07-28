import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutMembersInputObjectSchema as GroupCreateWithoutMembersInputObjectSchema } from './GroupCreateWithoutMembersInput.schema';
import { GroupUncheckedCreateWithoutMembersInputObjectSchema as GroupUncheckedCreateWithoutMembersInputObjectSchema } from './GroupUncheckedCreateWithoutMembersInput.schema';
import { GroupCreateOrConnectWithoutMembersInputObjectSchema as GroupCreateOrConnectWithoutMembersInputObjectSchema } from './GroupCreateOrConnectWithoutMembersInput.schema';
import { GroupUpsertWithoutMembersInputObjectSchema as GroupUpsertWithoutMembersInputObjectSchema } from './GroupUpsertWithoutMembersInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateToOneWithWhereWithoutMembersInputObjectSchema as GroupUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './GroupUpdateToOneWithWhereWithoutMembersInput.schema';
import { GroupUpdateWithoutMembersInputObjectSchema as GroupUpdateWithoutMembersInputObjectSchema } from './GroupUpdateWithoutMembersInput.schema';
import { GroupUncheckedUpdateWithoutMembersInputObjectSchema as GroupUncheckedUpdateWithoutMembersInputObjectSchema } from './GroupUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutMembersInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutMembersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GroupWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GroupWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GroupUpdateToOneWithWhereWithoutMembersInputObjectSchema), z.lazy(() => GroupUpdateWithoutMembersInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutMembersInputObjectSchema)]).optional()
}).strict();
export const GroupUpdateOneWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.GroupUpdateOneWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateOneWithoutMembersNestedInput>;
export const GroupUpdateOneWithoutMembersNestedInputObjectZodSchema = makeSchema();
