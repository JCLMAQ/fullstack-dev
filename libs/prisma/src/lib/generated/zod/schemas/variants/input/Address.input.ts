import * as z from 'zod';
import { AddressTypeSchema } from '../../enums/AddressType.schema';
// prettier-ignore
export const AddressInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    userId: z.string(),
    street: z.string(),
    buildingNum: z.string(),
    aptNum: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    country: z.string(),
    countryIso: z.string(),
    addressType: AddressTypeSchema.optional().nullable(),
    isPrimary: z.boolean()
}).strict();

export type AddressInputType = z.infer<typeof AddressInputSchema>;
