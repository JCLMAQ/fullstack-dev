import * as z from 'zod';
export const AddressGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  userId: z.string().optional(),
  street: z.string().optional(),
  buildingNum: z.string().optional(),
  aptNum: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
  countryIso: z.string().optional(),
  addressType: z.unknown().nullable().optional(),
  isPrimary: z.boolean().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    userId: z.number().optional(),
    street: z.number().optional(),
    buildingNum: z.number().optional(),
    aptNum: z.number().optional(),
    city: z.number().optional(),
    state: z.number().optional(),
    zipCode: z.number().optional(),
    country: z.number().optional(),
    countryIso: z.number().optional(),
    addressType: z.number().optional(),
    isPrimary: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    userId: z.string().nullable().optional(),
    street: z.string().nullable().optional(),
    buildingNum: z.string().nullable().optional(),
    aptNum: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
    zipCode: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    countryIso: z.string().nullable().optional(),
    addressType: z.unknown().nullable().optional(),
    isPrimary: z.boolean().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    userId: z.string().nullable().optional(),
    street: z.string().nullable().optional(),
    buildingNum: z.string().nullable().optional(),
    aptNum: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
    zipCode: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    countryIso: z.string().nullable().optional(),
    addressType: z.unknown().nullable().optional(),
    isPrimary: z.boolean().nullable().optional()
  }).nullable().optional()
}));