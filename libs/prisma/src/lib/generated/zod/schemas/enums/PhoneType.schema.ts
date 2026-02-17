import * as z from 'zod';

export const PhoneTypeSchema = z.enum(['Mobile', 'Home', 'Work', 'Organisation', 'Other'])

export type PhoneType = z.infer<typeof PhoneTypeSchema>;