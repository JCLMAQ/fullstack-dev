import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutOwnerInputObjectSchema as GroupUpdateWithoutOwnerInputObjectSchema } from './GroupUpdateWithoutOwnerInput.schema';
import { GroupUncheckedUpdateWithoutOwnerInputObjectSchema as GroupUncheckedUpdateWithoutOwnerInputObjectSchema } from './GroupUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutOwnerInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutOwnerInput>;
export const GroupUpdateWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();
