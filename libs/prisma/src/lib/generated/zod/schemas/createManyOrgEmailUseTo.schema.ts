import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailUseToCreateManyInputObjectSchema as OrgEmailUseToCreateManyInputObjectSchema } from './objects/OrgEmailUseToCreateManyInput.schema';

export const OrgEmailUseToCreateManySchema: z.ZodType<Prisma.OrgEmailUseToCreateManyArgs> = z.object({ data: z.union([ OrgEmailUseToCreateManyInputObjectSchema, z.array(OrgEmailUseToCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToCreateManyArgs>;

export const OrgEmailUseToCreateManyZodSchema = z.object({ data: z.union([ OrgEmailUseToCreateManyInputObjectSchema, z.array(OrgEmailUseToCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();