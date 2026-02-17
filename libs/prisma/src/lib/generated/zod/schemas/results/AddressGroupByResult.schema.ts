import * as z from 'zod';
export const AddressGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  street: z.string(),
  buildingNum: z.string(),
  aptNum: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
  countryIso: z.string(),
  isPrimary: z.boolean(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    user: z.number(),
    userId: z.number(),
    street: z.number(),
    buildingNum: z.number(),
    aptNum: z.number(),
    city: z.number(),
    state: z.number(),
    zipCode: z.number(),
    country: z.number(),
    countryIso: z.number(),
    addressType: z.number(),
    isPrimary: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    street: z.string().nullable(),
    buildingNum: z.string().nullable(),
    aptNum: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    zipCode: z.string().nullable(),
    country: z.string().nullable(),
    countryIso: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    street: z.string().nullable(),
    buildingNum: z.string().nullable(),
    aptNum: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    zipCode: z.string().nullable(),
    country: z.string().nullable(),
    countryIso: z.string().nullable()
  }).nullable().optional()
}));