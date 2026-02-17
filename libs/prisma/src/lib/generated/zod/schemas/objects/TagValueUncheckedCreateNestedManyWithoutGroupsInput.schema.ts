import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutGroupsInputObjectSchema as TagValueCreateWithoutGroupsInputObjectSchema } from './TagValueCreateWithoutGroupsInput.schema';
import { TagValueUncheckedCreateWithoutGroupsInputObjectSchema as TagValueUncheckedCreateWithoutGroupsInputObjectSchema } from './TagValueUncheckedCreateWithoutGroupsInput.schema';
import { TagValueCreateOrConnectWithoutGroupsInputObjectSchema as TagValueCreateOrConnectWithoutGroupsInputObjectSchema } from './TagValueCreateOrConnectWithoutGroupsInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUncheckedCreateNestedManyWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TagValueUncheckedCreateNestedManyWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUncheckedCreateNestedManyWithoutGroupsInput>;
export const TagValueUncheckedCreateNestedManyWithoutGroupsInputObjectZodSchema = makeSchema();
