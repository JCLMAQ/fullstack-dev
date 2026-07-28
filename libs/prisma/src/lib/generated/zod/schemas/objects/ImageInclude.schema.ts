import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema';
import { StoryArgsObjectSchema as StoryArgsObjectSchema } from './StoryArgs.schema'

const makeSchema = () => z.object({
  uploadedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
  profileUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  story: z.union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)]).optional()
}).strict();
export const ImageIncludeObjectSchema: z.ZodType<Prisma.ImageInclude> = makeSchema() as unknown as z.ZodType<Prisma.ImageInclude>;
export const ImageIncludeObjectZodSchema = makeSchema();
