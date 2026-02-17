import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutSubTagsInputObjectSchema as TagValueCreateWithoutSubTagsInputObjectSchema } from './TagValueCreateWithoutSubTagsInput.schema';
import { TagValueUncheckedCreateWithoutSubTagsInputObjectSchema as TagValueUncheckedCreateWithoutSubTagsInputObjectSchema } from './TagValueUncheckedCreateWithoutSubTagsInput.schema';
import { TagValueCreateOrConnectWithoutSubTagsInputObjectSchema as TagValueCreateOrConnectWithoutSubTagsInputObjectSchema } from './TagValueCreateOrConnectWithoutSubTagsInput.schema';
import { TagValueUpsertWithoutSubTagsInputObjectSchema as TagValueUpsertWithoutSubTagsInputObjectSchema } from './TagValueUpsertWithoutSubTagsInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateToOneWithWhereWithoutSubTagsInputObjectSchema as TagValueUpdateToOneWithWhereWithoutSubTagsInputObjectSchema } from './TagValueUpdateToOneWithWhereWithoutSubTagsInput.schema';
import { TagValueUpdateWithoutSubTagsInputObjectSchema as TagValueUpdateWithoutSubTagsInputObjectSchema } from './TagValueUpdateWithoutSubTagsInput.schema';
import { TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema as TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema } from './TagValueUncheckedUpdateWithoutSubTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutSubTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagValueCreateOrConnectWithoutSubTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => TagValueUpsertWithoutSubTagsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TagValueWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TagValueWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TagValueWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagValueUpdateToOneWithWhereWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUpdateWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema)]).optional()
}).strict();
export const TagValueUpdateOneWithoutSubTagsNestedInputObjectSchema: z.ZodType<Prisma.TagValueUpdateOneWithoutSubTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateOneWithoutSubTagsNestedInput>;
export const TagValueUpdateOneWithoutSubTagsNestedInputObjectZodSchema = makeSchema();
