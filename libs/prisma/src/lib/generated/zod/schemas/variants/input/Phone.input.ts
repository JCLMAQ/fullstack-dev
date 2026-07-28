import * as z from 'zod';
import { PhoneTypeSchema } from '../../enums/PhoneType.schema';
// prettier-ignore
export const PhoneInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    user: z.unknown(),
    userId: z.string(),
    countryCode: z.string(),
    countryIso: z.string(),
    number: z.string(),
    extension: z.string().optional().nullable(),
    phoneType: PhoneTypeSchema.optional().nullable(),
    isPrimary: z.boolean()
}).strict();

export type PhoneInputType = z.infer<typeof PhoneInputSchema>;
