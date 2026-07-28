import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutOwnerInputObjectSchema as GroupCreateWithoutOwnerInputObjectSchema } from './GroupCreateWithoutOwnerInput.schema';
import { GroupUncheckedCreateWithoutOwnerInputObjectSchema as GroupUncheckedCreateWithoutOwnerInputObjectSchema } from './GroupUncheckedCreateWithoutOwnerInput.schema';
import { GroupCreateOrConnectWithoutOwnerInputObjectSchema as GroupCreateOrConnectWithoutOwnerInputObjectSchema } from './GroupCreateOrConnectWithoutOwnerInput.schema';
import { GroupCreateManyOwnerInputEnvelopeObjectSchema as GroupCreateManyOwnerInputEnvelopeObjectSchema } from './GroupCreateManyOwnerInputEnvelope.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutOwnerInputObjectSchema), z.lazy(() => GroupCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupCreateNestedManyWithoutOwnerInputObjectSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateNestedManyWithoutOwnerInput>;
export const GroupCreateNestedManyWithoutOwnerInputObjectZodSchema = makeSchema();
