import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutGroupsInputObjectSchema as TagValueCreateWithoutGroupsInputObjectSchema } from './TagValueCreateWithoutGroupsInput.schema';
import { TagValueUncheckedCreateWithoutGroupsInputObjectSchema as TagValueUncheckedCreateWithoutGroupsInputObjectSchema } from './TagValueUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutGroupsInput>;
export const TagValueCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();
