import * as z from 'zod';
export const PhoneGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  userId: z.string().optional(),
  countryCode: z.string().optional(),
  countryIso: z.string().optional(),
  number: z.string().optional(),
  extension: z.string().nullable().optional(),
  phoneType: z.unknown().nullable().optional(),
  isPrimary: z.boolean().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    userId: z.number().optional(),
    countryCode: z.number().optional(),
    countryIso: z.number().optional(),
    number: z.number().optional(),
    extension: z.number().optional(),
    phoneType: z.number().optional(),
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
    countryCode: z.string().nullable().optional(),
    countryIso: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
    extension: z.string().nullable().optional(),
    phoneType: z.unknown().nullable().optional(),
    isPrimary: z.boolean().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    userId: z.string().nullable().optional(),
    countryCode: z.string().nullable().optional(),
    countryIso: z.string().nullable().optional(),
    number: z.string().nullable().optional(),
    extension: z.string().nullable().optional(),
    phoneType: z.unknown().nullable().optional(),
    isPrimary: z.boolean().nullable().optional()
  }).nullable().optional()
}));