import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutPostsInputObjectSchema as OrganizationCreateWithoutPostsInputObjectSchema } from './OrganizationCreateWithoutPostsInput.schema';
import { OrganizationUncheckedCreateWithoutPostsInputObjectSchema as OrganizationUncheckedCreateWithoutPostsInputObjectSchema } from './OrganizationUncheckedCreateWithoutPostsInput.schema';
import { OrganizationCreateOrConnectWithoutPostsInputObjectSchema as OrganizationCreateOrConnectWithoutPostsInputObjectSchema } from './OrganizationCreateOrConnectWithoutPostsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPostsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPostsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutPostsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutPostsInput>;
export const OrganizationCreateNestedOneWithoutPostsInputObjectZodSchema = makeSchema();
