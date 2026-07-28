import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutFilesInputObjectSchema as GroupUncheckedUpdateManyWithoutFilesInputObjectSchema } from './GroupUncheckedUpdateManyWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutFilesInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutFilesInput>;
export const GroupUpdateManyWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
