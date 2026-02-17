import { z } from 'zod';
 // Helper pour parser les réponses avec Zod
export function parseResponse<T>(schema: z.ZodType<T>, data: unknown): T {
    const result = schema.safeParse(data);
    if (!result.success) {
      console.error('❌ Zod Validation Error:', result.error);
      throw new Error('Data validation failed from API');
    }
    return result.data;
  }
