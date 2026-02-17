import * as z from 'zod';
export const StoryCreateManyResultSchema = z.object({
  count: z.number()
});