import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutOwnerInputObjectSchema as GroupCreateWithoutOwnerInputObjectSchema } from './GroupCreateWithoutOwnerInput.schema';
import { GroupUncheckedCreateWithoutOwnerInputObjectSchema as GroupUncheckedCreateWithoutOwnerInputObjectSchema } from './GroupUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutOwnerInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutOwnerInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutOwnerInput>;
export const GroupCreateOrConnectWithoutOwnerInputObjectZodSchema = makeSchema();
