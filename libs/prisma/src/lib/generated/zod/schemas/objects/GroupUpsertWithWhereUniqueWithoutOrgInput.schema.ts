import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutOrgInputObjectSchema as GroupUpdateWithoutOrgInputObjectSchema } from './GroupUpdateWithoutOrgInput.schema';
import { GroupUncheckedUpdateWithoutOrgInputObjectSchema as GroupUncheckedUpdateWithoutOrgInputObjectSchema } from './GroupUncheckedUpdateWithoutOrgInput.schema';
import { GroupCreateWithoutOrgInputObjectSchema as GroupCreateWithoutOrgInputObjectSchema } from './GroupCreateWithoutOrgInput.schema';
import { GroupUncheckedCreateWithoutOrgInputObjectSchema as GroupUncheckedCreateWithoutOrgInputObjectSchema } from './GroupUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutOrgInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutOrgInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutOrgInput>;
export const GroupUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
