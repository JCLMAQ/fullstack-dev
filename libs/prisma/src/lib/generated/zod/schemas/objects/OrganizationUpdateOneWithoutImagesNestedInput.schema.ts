import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutImagesInputObjectSchema as OrganizationCreateWithoutImagesInputObjectSchema } from './OrganizationCreateWithoutImagesInput.schema';
import { OrganizationUncheckedCreateWithoutImagesInputObjectSchema as OrganizationUncheckedCreateWithoutImagesInputObjectSchema } from './OrganizationUncheckedCreateWithoutImagesInput.schema';
import { OrganizationCreateOrConnectWithoutImagesInputObjectSchema as OrganizationCreateOrConnectWithoutImagesInputObjectSchema } from './OrganizationCreateOrConnectWithoutImagesInput.schema';
import { OrganizationUpsertWithoutImagesInputObjectSchema as OrganizationUpsertWithoutImagesInputObjectSchema } from './OrganizationUpsertWithoutImagesInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutImagesInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutImagesInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutImagesInput.schema';
import { OrganizationUpdateWithoutImagesInputObjectSchema as OrganizationUpdateWithoutImagesInputObjectSchema } from './OrganizationUpdateWithoutImagesInput.schema';
import { OrganizationUncheckedUpdateWithoutImagesInputObjectSchema as OrganizationUncheckedUpdateWithoutImagesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutImagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutImagesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutImagesInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutImagesNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutImagesNestedInput>;
export const OrganizationUpdateOneWithoutImagesNestedInputObjectZodSchema = makeSchema();
