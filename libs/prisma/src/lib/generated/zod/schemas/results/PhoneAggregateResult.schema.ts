import * as z from 'zod';
export const PhoneAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    user: z.number(),
    userId: z.number(),
    countryCode: z.number(),
    countryIso: z.number(),
    number: z.number(),
    extension: z.number(),
    phoneType: z.number(),
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
    countryCode: z.string().nullable(),
    countryIso: z.string().nullable(),
    number: z.string().nullable(),
    extension: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    countryCode: z.string().nullable(),
    countryIso: z.string().nullable(),
    number: z.string().nullable(),
    extension: z.string().nullable()
  }).nullable().optional()});