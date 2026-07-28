import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCountOutputTypeCountTagsArgsObjectSchema as FileCountOutputTypeCountTagsArgsObjectSchema } from './FileCountOutputTypeCountTagsArgs.schema';
import { FileCountOutputTypeCountGroupsArgsObjectSchema as FileCountOutputTypeCountGroupsArgsObjectSchema } from './FileCountOutputTypeCountGroupsArgs.schema'

const makeSchema = () => z.object({
  Tags: z.union([z.boolean(), z.lazy(() => FileCountOutputTypeCountTagsArgsObjectSchema)]).optional(),
  groups: z.union([z.boolean(), z.lazy(() => FileCountOutputTypeCountGroupsArgsObjectSchema)]).optional()
}).strict();
export const FileCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.FileCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileCountOutputTypeSelect>;
export const FileCountOutputTypeSelectObjectZodSchema = makeSchema();
