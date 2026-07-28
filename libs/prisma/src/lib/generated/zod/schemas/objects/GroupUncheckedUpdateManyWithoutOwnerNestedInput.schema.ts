import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutOwnerInputObjectSchema as GroupCreateWithoutOwnerInputObjectSchema } from './GroupCreateWithoutOwnerInput.schema';
import { GroupUncheckedCreateWithoutOwnerInputObjectSchema as GroupUncheckedCreateWithoutOwnerInputObjectSchema } from './GroupUncheckedCreateWithoutOwnerInput.schema';
import { GroupCreateOrConnectWithoutOwnerInputObjectSchema as GroupCreateOrConnectWithoutOwnerInputObjectSchema } from './GroupCreateOrConnectWithoutOwnerInput.schema';
import { GroupUpsertWithWhereUniqueWithoutOwnerInputObjectSchema as GroupUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { GroupCreateManyOwnerInputEnvelopeObjectSchema as GroupCreateManyOwnerInputEnvelopeObjectSchema } from './GroupCreateManyOwnerInputEnvelope.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutOwnerInputObjectSchema as GroupUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { GroupUpdateManyWithWhereWithoutOwnerInputObjectSchema as GroupUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './GroupUpdateManyWithWhereWithoutOwnerInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutOwnerInputObjectSchema), z.lazy(() => GroupCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutOwnerInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutOwnerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput>;
export const GroupUncheckedUpdateManyWithoutOwnerNestedInputObjectZodSchema = makeSchema();
