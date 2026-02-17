import * as z from 'zod';

export const TokenTypeSchema = z.enum(['EMAIL', 'API', 'FORGOT', 'ACCOUNT', 'REFREZH'])

export type TokenType = z.infer<typeof TokenTypeSchema>;