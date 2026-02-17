import * as z from 'zod';
export const StoryDeleteManyResultSchema = z.object({
  count: z.number()
});