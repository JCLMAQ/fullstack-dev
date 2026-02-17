import * as z from 'zod';
// prettier-ignore
export const TagTranslateInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    language: z.unknown(),
    languageId: z.number().int(),
    translation: z.string(),
    tagId: z.number().int(),
    tagValue: z.unknown(),
    description: z.string().optional().nullable()
}).strict();

export type TagTranslateInputType = z.infer<typeof TagTranslateInputSchema>;
