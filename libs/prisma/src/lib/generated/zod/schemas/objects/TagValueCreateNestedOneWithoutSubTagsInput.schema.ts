import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutSubTagsInputObjectSchema as TagValueCreateWithoutSubTagsInputObjectSchema } from './TagValueCreateWithoutSubTagsInput.schema';
import { TagValueUncheckedCreateWithoutSubTagsInputObjectSchema as TagValueUncheckedCreateWithoutSubTagsInputObjectSchema } from './TagValueUncheckedCreateWithoutSubTagsInput.schema';
import { TagValueCreateOrConnectWithoutSubTagsInputObjectSchema as TagValueCreateOrConnectWithoutSubTagsInputObjectSchema } from './TagValueCreateOrConnectWithoutSubTagsInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutSubTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagValueCreateOrConnectWithoutSubTagsInputObjectSchema).optional(),
  connect: z.lazy(() => TagValueWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagValueCreateNestedOneWithoutSubTagsInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedOneWithoutSubTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedOneWithoutSubTagsInput>;
export const TagValueCreateNestedOneWithoutSubTagsInputObjectZodSchema = makeSchema();
