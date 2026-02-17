import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const PhoneWhereUniqueInputObjectSchema: z.ZodType<Prisma.PhoneWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneWhereUniqueInput>;
export const PhoneWhereUniqueInputObjectZodSchema = makeSchema();
