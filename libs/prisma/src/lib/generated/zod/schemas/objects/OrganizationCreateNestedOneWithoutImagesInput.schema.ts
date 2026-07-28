import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutImagesInputObjectSchema as OrganizationCreateWithoutImagesInputObjectSchema } from './OrganizationCreateWithoutImagesInput.schema';
import { OrganizationUncheckedCreateWithoutImagesInputObjectSchema as OrganizationUncheckedCreateWithoutImagesInputObjectSchema } from './OrganizationUncheckedCreateWithoutImagesInput.schema';
import { OrganizationCreateOrConnectWithoutImagesInputObjectSchema as OrganizationCreateOrConnectWithoutImagesInputObjectSchema } from './OrganizationCreateOrConnectWithoutImagesInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutImagesInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutImagesInput>;
export const OrganizationCreateNestedOneWithoutImagesInputObjectZodSchema = makeSchema();
