import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  domain: z.string().optional()
}).strict();
export const AppEmailDomainWhereUniqueInputObjectSchema: z.ZodType<Prisma.AppEmailDomainWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainWhereUniqueInput>;
export const AppEmailDomainWhereUniqueInputObjectZodSchema = makeSchema();
