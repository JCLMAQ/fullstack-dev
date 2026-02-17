import * as z from 'zod';
import { AddressTypeSchema } from '../../enums/AddressType.schema';
// prettier-ignore
export const AddressResultSchema = z.object({
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
    addressType: AddressTypeSchema.nullable(),
    isPrimary: z.boolean()
}).strict();

export type AddressResultType = z.infer<typeof AddressResultSchema>;
