import * as z from 'zod';

export const GenderSchema = z.enum(['MALE', 'FEMELE', 'UNKNOWN', 'NONE'])

export type Gender = z.infer<typeof GenderSchema>;