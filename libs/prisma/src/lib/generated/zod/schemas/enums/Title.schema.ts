import * as z from 'zod';

export const TitleSchema = z.enum(['Mr', 'Mme', 'Dct'])

export type Title = z.infer<typeof TitleSchema>;