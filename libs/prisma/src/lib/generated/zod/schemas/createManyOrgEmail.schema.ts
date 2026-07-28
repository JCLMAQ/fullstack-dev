import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailCreateManyInputObjectSchema as OrgEmailCreateManyInputObjectSchema } from './objects/OrgEmailCreateManyInput.schema';

export const OrgEmailCreateManySchema: z.ZodType<Prisma.OrgEmailCreateManyArgs> = z.object({ data: z.union([ OrgEmailCreateManyInputObjectSchema, z.array(OrgEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailCreateManyArgs>;

export const OrgEmailCreateManyZodSchema = z.object({ data: z.union([ OrgEmailCreateManyInputObjectSchema, z.array(OrgEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();