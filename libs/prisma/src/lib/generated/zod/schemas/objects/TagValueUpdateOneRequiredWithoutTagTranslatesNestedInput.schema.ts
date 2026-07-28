import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutTagTranslatesInputObjectSchema as TagValueCreateWithoutTagTranslatesInputObjectSchema } from './TagValueCreateWithoutTagTranslatesInput.schema';
import { TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema as TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagTranslatesInput.schema';
import { TagValueCreateOrConnectWithoutTagTranslatesInputObjectSchema as TagValueCreateOrConnectWithoutTagTranslatesInputObjectSchema } from './TagValueCreateOrConnectWithoutTagTranslatesInput.schema';
import { TagValueUpsertWithoutTagTranslatesInputObjectSchema as TagValueUpsertWithoutTagTranslatesInputObjectSchema } from './TagValueUpsertWithoutTagTranslatesInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema as TagValueUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema } from './TagValueUpdateToOneWithWhereWithoutTagTranslatesInput.schema';
import { TagValueUpdateWithoutTagTranslatesInputObjectSchema as TagValueUpdateWithoutTagTranslatesInputObjectSchema } from './TagValueUpdateWithoutTagTranslatesInput.schema';
import { TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema as TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema } from './TagValueUncheckedUpdateWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagTranslatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagValueCreateOrConnectWithoutTagTranslatesInputObjectSchema).optional(),
  upsert: z.lazy(() => TagValueUpsertWithoutTagTranslatesInputObjectSchema).optional(),
  connect: z.lazy(() => TagValueWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagValueUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUpdateWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema)]).optional()
}).strict();
export const TagValueUpdateOneRequiredWithoutTagTranslatesNestedInputObjectSchema: z.ZodType<Prisma.TagValueUpdateOneRequiredWithoutTagTranslatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateOneRequiredWithoutTagTranslatesNestedInput>;
export const TagValueUpdateOneRequiredWithoutTagTranslatesNestedInputObjectZodSchema = makeSchema();
