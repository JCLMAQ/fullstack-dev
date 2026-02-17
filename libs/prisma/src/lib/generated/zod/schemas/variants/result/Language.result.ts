import * as z from 'zod';
// prettier-ignore
export const LanguageResultSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    name: z.string(),
    translations: z.array(z.unknown()),
    users: z.array(z.unknown()),
    tagTranslates: z.array(z.unknown())
}).strict();

export type LanguageResultType = z.infer<typeof LanguageResultSchema>;
