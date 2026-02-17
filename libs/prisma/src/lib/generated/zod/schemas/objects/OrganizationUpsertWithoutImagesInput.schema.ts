import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutImagesInputObjectSchema as OrganizationUpdateWithoutImagesInputObjectSchema } from './OrganizationUpdateWithoutImagesInput.schema';
import { OrganizationUncheckedUpdateWithoutImagesInputObjectSchema as OrganizationUncheckedUpdateWithoutImagesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutImagesInput.schema';
import { OrganizationCreateWithoutImagesInputObjectSchema as OrganizationCreateWithoutImagesInputObjectSchema } from './OrganizationCreateWithoutImagesInput.schema';
import { OrganizationUncheckedCreateWithoutImagesInputObjectSchema as OrganizationUncheckedCreateWithoutImagesInputObjectSchema } from './OrganizationUncheckedCreateWithoutImagesInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutImagesInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutImagesInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutImagesInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutImagesInput>;
export const OrganizationUpsertWithoutImagesInputObjectZodSchema = makeSchema();
