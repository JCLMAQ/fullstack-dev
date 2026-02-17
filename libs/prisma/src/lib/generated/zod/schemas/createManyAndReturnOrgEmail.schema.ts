import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './objects/OrgEmailSelect.schema';
import { OrgEmailCreateManyInputObjectSchema as OrgEmailCreateManyInputObjectSchema } from './objects/OrgEmailCreateManyInput.schema';

export const OrgEmailCreateManyAndReturnSchema: z.ZodType<Prisma.OrgEmailCreateManyAndReturnArgs> = z.object({ select: OrgEmailSelectObjectSchema.optional(), data: z.union([ OrgEmailCreateManyInputObjectSchema, z.array(OrgEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailCreateManyAndReturnArgs>;

export const OrgEmailCreateManyAndReturnZodSchema = z.object({ select: OrgEmailSelectObjectSchema.optional(), data: z.union([ OrgEmailCreateManyInputObjectSchema, z.array(OrgEmailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();