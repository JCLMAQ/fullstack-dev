import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const AddressWhereUniqueInputObjectSchema: z.ZodType<Prisma.AddressWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressWhereUniqueInput>;
export const AddressWhereUniqueInputObjectZodSchema = makeSchema();
