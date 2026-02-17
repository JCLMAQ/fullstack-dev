import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutPostsInputObjectSchema as OrganizationCreateWithoutPostsInputObjectSchema } from './OrganizationCreateWithoutPostsInput.schema';
import { OrganizationUncheckedCreateWithoutPostsInputObjectSchema as OrganizationUncheckedCreateWithoutPostsInputObjectSchema } from './OrganizationUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutPostsInput>;
export const OrganizationCreateOrConnectWithoutPostsInputObjectZodSchema = makeSchema();
