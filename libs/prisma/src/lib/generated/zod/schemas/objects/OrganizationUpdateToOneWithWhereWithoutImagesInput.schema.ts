import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutImagesInputObjectSchema as OrganizationUpdateWithoutImagesInputObjectSchema } from './OrganizationUpdateWithoutImagesInput.schema';
import { OrganizationUncheckedUpdateWithoutImagesInputObjectSchema as OrganizationUncheckedUpdateWithoutImagesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutImagesInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutImagesInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutImagesInput>;
export const OrganizationUpdateToOneWithWhereWithoutImagesInputObjectZodSchema = makeSchema();
