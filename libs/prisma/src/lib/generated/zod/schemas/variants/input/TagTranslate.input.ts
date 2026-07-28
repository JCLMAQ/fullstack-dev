import * as z from 'zod';
// prettier-ignore
export const TagTranslateInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    language: z.unknown(),
    languageId: z.number().int(),
    translation: z.string(),
    tagId: z.number().int(),
    tagValue: z.unknown(),
    description: z.string().optional().nullable()
}).strict();

export type TagTranslateInputType = z.infer<typeof TagTranslateInputSchema>;
