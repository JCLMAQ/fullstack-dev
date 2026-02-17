import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupCreateWithoutOrgInputObjectSchema as GroupCreateWithoutOrgInputObjectSchema } from './GroupCreateWithoutOrgInput.schema';
import { GroupUncheckedCreateWithoutOrgInputObjectSchema as GroupUncheckedCreateWithoutOrgInputObjectSchema } from './GroupUncheckedCreateWithoutOrgInput.schema';
import { GroupCreateOrConnectWithoutOrgInputObjectSchema as GroupCreateOrConnectWithoutOrgInputObjectSchema } from './GroupCreateOrConnectWithoutOrgInput.schema';
import { GroupUpsertWithWhereUniqueWithoutOrgInputObjectSchema as GroupUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutOrgInput.schema';
import { GroupCreateManyOrgInputEnvelopeObjectSchema as GroupCreateManyOrgInputEnvelopeObjectSchema } from './GroupCreateManyOrgInputEnvelope.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutOrgInputObjectSchema as GroupUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutOrgInput.schema';
import { GroupUpdateManyWithWhereWithoutOrgInputObjectSchema as GroupUpdateManyWithWhereWithoutOrgInputObjectSchema } from './GroupUpdateManyWithWhereWithoutOrgInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutOrgInputObjectSchema), z.lazy(() => GroupCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithoutOrgNestedInput>;
export const GroupUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();
