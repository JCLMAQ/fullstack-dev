import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutMembersInputObjectSchema as GroupCreateWithoutMembersInputObjectSchema } from './GroupCreateWithoutMembersInput.schema';
import { GroupUncheckedCreateWithoutMembersInputObjectSchema as GroupUncheckedCreateWithoutMembersInputObjectSchema } from './GroupUncheckedCreateWithoutMembersInput.schema';
import { GroupCreateOrConnectWithoutMembersInputObjectSchema as GroupCreateOrConnectWithoutMembersInputObjectSchema } from './GroupCreateOrConnectWithoutMembersInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutMembersInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputObjectSchema).optional()
}).strict();
export const GroupCreateNestedOneWithoutMembersInputObjectSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateNestedOneWithoutMembersInput>;
export const GroupCreateNestedOneWithoutMembersInputObjectZodSchema = makeSchema();
