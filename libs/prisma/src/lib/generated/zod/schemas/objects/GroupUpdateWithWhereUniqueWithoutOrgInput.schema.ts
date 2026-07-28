import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutOrgInputObjectSchema as GroupUpdateWithoutOrgInputObjectSchema } from './GroupUpdateWithoutOrgInput.schema';
import { GroupUncheckedUpdateWithoutOrgInputObjectSchema as GroupUncheckedUpdateWithoutOrgInputObjectSchema } from './GroupUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutOrgInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutOrgInput>;
export const GroupUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
