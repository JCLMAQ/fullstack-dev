import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToCreateManyInputObjectSchema as OrgEmailUseToCreateManyInputObjectSchema } from './objects/OrgEmailUseToCreateManyInput.schema';

export const OrgEmailUseToCreateManyAndReturnSchema: z.ZodType<Prisma.OrgEmailUseToCreateManyAndReturnArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), data: z.union([ OrgEmailUseToCreateManyInputObjectSchema, z.array(OrgEmailUseToCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToCreateManyAndReturnArgs>;

export const OrgEmailUseToCreateManyAndReturnZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), data: z.union([ OrgEmailUseToCreateManyInputObjectSchema, z.array(OrgEmailUseToCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();