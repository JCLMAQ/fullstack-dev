import * as z from 'zod';
import { TokenTypeSchema } from '../../enums/TokenType.schema';
// prettier-ignore
export const TokenModelSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    tokenId: z.string().nullable(),
    type: TokenTypeSchema,
    emailToken: z.string().nullable(),
    valid: z.boolean(),
    expiration: z.date(),
    user: z.unknown(),
    userId: z.string()
}).strict();

export type TokenPureType = z.infer<typeof TokenModelSchema>;
