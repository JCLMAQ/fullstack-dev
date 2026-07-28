import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutTagTranslatesInputObjectSchema as TagValueCreateWithoutTagTranslatesInputObjectSchema } from './TagValueCreateWithoutTagTranslatesInput.schema';
import { TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema as TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutTagTranslatesInput>;
export const TagValueCreateOrConnectWithoutTagTranslatesInputObjectZodSchema = makeSchema();
