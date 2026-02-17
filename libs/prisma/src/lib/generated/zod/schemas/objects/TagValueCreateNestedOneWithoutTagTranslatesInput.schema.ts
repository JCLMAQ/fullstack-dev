import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutTagTranslatesInputObjectSchema as TagValueCreateWithoutTagTranslatesInputObjectSchema } from './TagValueCreateWithoutTagTranslatesInput.schema';
import { TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema as TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagTranslatesInput.schema';
import { TagValueCreateOrConnectWithoutTagTranslatesInputObjectSchema as TagValueCreateOrConnectWithoutTagTranslatesInputObjectSchema } from './TagValueCreateOrConnectWithoutTagTranslatesInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagValueCreateOrConnectWithoutTagTranslatesInputObjectSchema).optional(),
  connect: z.lazy(() => TagValueWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagValueCreateNestedOneWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedOneWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedOneWithoutTagTranslatesInput>;
export const TagValueCreateNestedOneWithoutTagTranslatesInputObjectZodSchema = makeSchema();
