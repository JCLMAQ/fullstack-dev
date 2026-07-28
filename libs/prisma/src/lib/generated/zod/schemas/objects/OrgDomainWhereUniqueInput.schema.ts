import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const OrgDomainWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrgDomainWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainWhereUniqueInput>;
export const OrgDomainWhereUniqueInputObjectZodSchema = makeSchema();
