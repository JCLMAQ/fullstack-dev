import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './TagValueUpdateManyMutationInput.schema';
import { TagValueUncheckedUpdateManyWithoutFilesInputObjectSchema as TagValueUncheckedUpdateManyWithoutFilesInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateManyMutationInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateManyWithoutFilesInputObjectSchema)])
}).strict();
export const TagValueUpdateManyWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutFilesInput>;
export const TagValueUpdateManyWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
