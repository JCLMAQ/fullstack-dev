import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutOrgInputObjectSchema as PostCreateWithoutOrgInputObjectSchema } from './PostCreateWithoutOrgInput.schema';
import { PostUncheckedCreateWithoutOrgInputObjectSchema as PostUncheckedCreateWithoutOrgInputObjectSchema } from './PostUncheckedCreateWithoutOrgInput.schema';
import { PostCreateOrConnectWithoutOrgInputObjectSchema as PostCreateOrConnectWithoutOrgInputObjectSchema } from './PostCreateOrConnectWithoutOrgInput.schema';
import { PostCreateManyOrgInputEnvelopeObjectSchema as PostCreateManyOrgInputEnvelopeObjectSchema } from './PostCreateManyOrgInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutOrgInputObjectSchema), z.lazy(() => PostCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutOrgInput>;
export const PostUncheckedCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();
