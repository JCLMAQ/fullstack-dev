import * as z from 'zod';
export const WordDeleteManyResultSchema = z.object({
  count: z.number()
});