import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutMainTagInputObjectSchema as TagValueCreateWithoutMainTagInputObjectSchema } from './TagValueCreateWithoutMainTagInput.schema';
import { TagValueUncheckedCreateWithoutMainTagInputObjectSchema as TagValueUncheckedCreateWithoutMainTagInputObjectSchema } from './TagValueUncheckedCreateWithoutMainTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutMainTagInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutMainTagInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutMainTagInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutMainTagInput>;
export const TagValueCreateOrConnectWithoutMainTagInputObjectZodSchema = makeSchema();
