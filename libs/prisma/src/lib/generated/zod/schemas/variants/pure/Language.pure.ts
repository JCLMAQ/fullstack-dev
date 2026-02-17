import * as z from 'zod';
// prettier-ignore
export const LanguageModelSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    name: z.string(),
    translations: z.array(z.unknown()),
    users: z.array(z.unknown()),
    tagTranslates: z.array(z.unknown())
}).strict();

export type LanguagePureType = z.infer<typeof LanguageModelSchema>;
