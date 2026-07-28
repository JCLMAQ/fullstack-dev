import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutGroupsInputObjectSchema as TagValueCreateWithoutGroupsInputObjectSchema } from './TagValueCreateWithoutGroupsInput.schema';
import { TagValueUncheckedCreateWithoutGroupsInputObjectSchema as TagValueUncheckedCreateWithoutGroupsInputObjectSchema } from './TagValueUncheckedCreateWithoutGroupsInput.schema';
import { TagValueCreateOrConnectWithoutGroupsInputObjectSchema as TagValueCreateOrConnectWithoutGroupsInputObjectSchema } from './TagValueCreateOrConnectWithoutGroupsInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueCreateNestedManyWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedManyWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedManyWithoutGroupsInput>;
export const TagValueCreateNestedManyWithoutGroupsInputObjectZodSchema = makeSchema();
