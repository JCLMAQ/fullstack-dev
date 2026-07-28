import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutImagesInputObjectSchema as OrganizationCreateWithoutImagesInputObjectSchema } from './OrganizationCreateWithoutImagesInput.schema';
import { OrganizationUncheckedCreateWithoutImagesInputObjectSchema as OrganizationUncheckedCreateWithoutImagesInputObjectSchema } from './OrganizationUncheckedCreateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutImagesInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutImagesInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutImagesInput>;
export const OrganizationCreateOrConnectWithoutImagesInputObjectZodSchema = makeSchema();
