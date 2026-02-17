import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupCreateWithoutOrgInputObjectSchema as GroupCreateWithoutOrgInputObjectSchema } from './GroupCreateWithoutOrgInput.schema';
import { GroupUncheckedCreateWithoutOrgInputObjectSchema as GroupUncheckedCreateWithoutOrgInputObjectSchema } from './GroupUncheckedCreateWithoutOrgInput.schema';
import { GroupCreateOrConnectWithoutOrgInputObjectSchema as GroupCreateOrConnectWithoutOrgInputObjectSchema } from './GroupCreateOrConnectWithoutOrgInput.schema';
import { GroupCreateManyOrgInputEnvelopeObjectSchema as GroupCreateManyOrgInputEnvelopeObjectSchema } from './GroupCreateManyOrgInputEnvelope.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutOrgInputObjectSchema), z.lazy(() => GroupCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutOrgInput>;
export const GroupUncheckedCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();
