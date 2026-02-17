import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutFilesInputObjectSchema as OrganizationUpdateWithoutFilesInputObjectSchema } from './OrganizationUpdateWithoutFilesInput.schema';
import { OrganizationUncheckedUpdateWithoutFilesInputObjectSchema as OrganizationUncheckedUpdateWithoutFilesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutFilesInput.schema';
import { OrganizationCreateWithoutFilesInputObjectSchema as OrganizationCreateWithoutFilesInputObjectSchema } from './OrganizationCreateWithoutFilesInput.schema';
import { OrganizationUncheckedCreateWithoutFilesInputObjectSchema as OrganizationUncheckedCreateWithoutFilesInputObjectSchema } from './OrganizationUncheckedCreateWithoutFilesInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFilesInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutFilesInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutFilesInput>;
export const OrganizationUpsertWithoutFilesInputObjectZodSchema = makeSchema();
