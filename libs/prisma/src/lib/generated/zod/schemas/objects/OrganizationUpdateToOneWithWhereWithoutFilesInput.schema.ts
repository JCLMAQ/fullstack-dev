import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutFilesInputObjectSchema as OrganizationUpdateWithoutFilesInputObjectSchema } from './OrganizationUpdateWithoutFilesInput.schema';
import { OrganizationUncheckedUpdateWithoutFilesInputObjectSchema as OrganizationUncheckedUpdateWithoutFilesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutFilesInput>;
export const OrganizationUpdateToOneWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
