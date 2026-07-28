import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutTodosInputObjectSchema as TagValueCreateWithoutTodosInputObjectSchema } from './TagValueCreateWithoutTodosInput.schema';
import { TagValueUncheckedCreateWithoutTodosInputObjectSchema as TagValueUncheckedCreateWithoutTodosInputObjectSchema } from './TagValueUncheckedCreateWithoutTodosInput.schema';
import { TagValueCreateOrConnectWithoutTodosInputObjectSchema as TagValueCreateOrConnectWithoutTodosInputObjectSchema } from './TagValueCreateOrConnectWithoutTodosInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTodosInputObjectSchema), z.lazy(() => TagValueCreateWithoutTodosInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutTodosInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTodosInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutTodosInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutTodosInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueCreateNestedManyWithoutTodosInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedManyWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedManyWithoutTodosInput>;
export const TagValueCreateNestedManyWithoutTodosInputObjectZodSchema = makeSchema();
