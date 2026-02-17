import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutPostsInputObjectSchema as OrganizationCreateWithoutPostsInputObjectSchema } from './OrganizationCreateWithoutPostsInput.schema';
import { OrganizationUncheckedCreateWithoutPostsInputObjectSchema as OrganizationUncheckedCreateWithoutPostsInputObjectSchema } from './OrganizationUncheckedCreateWithoutPostsInput.schema';
import { OrganizationCreateOrConnectWithoutPostsInputObjectSchema as OrganizationCreateOrConnectWithoutPostsInputObjectSchema } from './OrganizationCreateOrConnectWithoutPostsInput.schema';
import { OrganizationUpsertWithoutPostsInputObjectSchema as OrganizationUpsertWithoutPostsInputObjectSchema } from './OrganizationUpsertWithoutPostsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutPostsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutPostsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutPostsInput.schema';
import { OrganizationUpdateWithoutPostsInputObjectSchema as OrganizationUpdateWithoutPostsInputObjectSchema } from './OrganizationUpdateWithoutPostsInput.schema';
import { OrganizationUncheckedUpdateWithoutPostsInputObjectSchema as OrganizationUncheckedUpdateWithoutPostsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPostsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPostsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutPostsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPostsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutPostsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutPostsNestedInput>;
export const OrganizationUpdateOneWithoutPostsNestedInputObjectZodSchema = makeSchema();
