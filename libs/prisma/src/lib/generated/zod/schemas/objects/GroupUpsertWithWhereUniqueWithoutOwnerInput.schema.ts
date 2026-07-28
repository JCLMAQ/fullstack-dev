import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutOwnerInputObjectSchema as GroupUpdateWithoutOwnerInputObjectSchema } from './GroupUpdateWithoutOwnerInput.schema';
import { GroupUncheckedUpdateWithoutOwnerInputObjectSchema as GroupUncheckedUpdateWithoutOwnerInputObjectSchema } from './GroupUncheckedUpdateWithoutOwnerInput.schema';
import { GroupCreateWithoutOwnerInputObjectSchema as GroupCreateWithoutOwnerInputObjectSchema } from './GroupCreateWithoutOwnerInput.schema';
import { GroupUncheckedCreateWithoutOwnerInputObjectSchema as GroupUncheckedCreateWithoutOwnerInputObjectSchema } from './GroupUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutOwnerInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutOwnerInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutOwnerInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutOwnerInput>;
export const GroupUpsertWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();
