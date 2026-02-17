import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutOwnerInputObjectSchema as PostCreateWithoutOwnerInputObjectSchema } from './PostCreateWithoutOwnerInput.schema';
import { PostUncheckedCreateWithoutOwnerInputObjectSchema as PostUncheckedCreateWithoutOwnerInputObjectSchema } from './PostUncheckedCreateWithoutOwnerInput.schema';
import { PostCreateOrConnectWithoutOwnerInputObjectSchema as PostCreateOrConnectWithoutOwnerInputObjectSchema } from './PostCreateOrConnectWithoutOwnerInput.schema';
import { PostCreateManyOwnerInputEnvelopeObjectSchema as PostCreateManyOwnerInputEnvelopeObjectSchema } from './PostCreateManyOwnerInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutOwnerInputObjectSchema), z.lazy(() => PostCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostCreateNestedManyWithoutOwnerInputObjectSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedManyWithoutOwnerInput>;
export const PostCreateNestedManyWithoutOwnerInputObjectZodSchema = makeSchema();
