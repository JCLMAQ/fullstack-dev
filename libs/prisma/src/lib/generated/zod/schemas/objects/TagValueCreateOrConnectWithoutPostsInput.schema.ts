import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutPostsInputObjectSchema as TagValueCreateWithoutPostsInputObjectSchema } from './TagValueCreateWithoutPostsInput.schema';
import { TagValueUncheckedCreateWithoutPostsInputObjectSchema as TagValueUncheckedCreateWithoutPostsInputObjectSchema } from './TagValueUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutPostsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutPostsInput>;
export const TagValueCreateOrConnectWithoutPostsInputObjectZodSchema = makeSchema();
