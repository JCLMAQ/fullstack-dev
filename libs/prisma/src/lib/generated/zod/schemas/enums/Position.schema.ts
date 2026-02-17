import * as z from 'zod';

export const PositionSchema = z.enum(['Manager', 'Member', 'Individual', 'Secretary'])

export type Position = z.infer<typeof PositionSchema>;