import * as z from 'zod';
import { TokenTypeSchema } from '../../enums/TokenType.schema';
// prettier-ignore
export const TokenInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    tokenId: z.string().optional().nullable(),
    type: TokenTypeSchema,
    emailToken: z.string().optional().nullable(),
    valid: z.boolean(),
    expiration: z.coerce.date(),
    user: z.unknown(),
    userId: z.string()
}).strict();

export type TokenInputType = z.infer<typeof TokenInputSchema>;
