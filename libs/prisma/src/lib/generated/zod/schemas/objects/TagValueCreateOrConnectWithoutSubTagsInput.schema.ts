import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutSubTagsInputObjectSchema as TagValueCreateWithoutSubTagsInputObjectSchema } from './TagValueCreateWithoutSubTagsInput.schema';
import { TagValueUncheckedCreateWithoutSubTagsInputObjectSchema as TagValueUncheckedCreateWithoutSubTagsInputObjectSchema } from './TagValueUncheckedCreateWithoutSubTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutSubTagsInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutSubTagsInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutSubTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutSubTagsInput>;
export const TagValueCreateOrConnectWithoutSubTagsInputObjectZodSchema = makeSchema();
