import * as z from 'zod';
import { PhoneTypeSchema } from '../../enums/PhoneType.schema';
// prettier-ignore
export const PhoneResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    userId: z.string(),
    countryCode: z.string(),
    countryIso: z.string(),
    number: z.string(),
    extension: z.string().nullable(),
    phoneType: PhoneTypeSchema.nullable(),
    isPrimary: z.boolean()
}).strict();

export type PhoneResultType = z.infer<typeof PhoneResultSchema>;
