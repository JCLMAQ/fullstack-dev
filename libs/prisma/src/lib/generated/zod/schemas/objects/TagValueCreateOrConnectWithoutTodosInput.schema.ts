import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutTodosInputObjectSchema as TagValueCreateWithoutTodosInputObjectSchema } from './TagValueCreateWithoutTodosInput.schema';
import { TagValueUncheckedCreateWithoutTodosInputObjectSchema as TagValueUncheckedCreateWithoutTodosInputObjectSchema } from './TagValueUncheckedCreateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutTodosInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTodosInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutTodosInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutTodosInput>;
export const TagValueCreateOrConnectWithoutTodosInputObjectZodSchema = makeSchema();
