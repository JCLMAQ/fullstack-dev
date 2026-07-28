import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UserPostLikeLinkUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateManyMutationInput>;
export const UserPostLikeLinkUpdateManyMutationInputObjectZodSchema = makeSchema();
