import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { TodoFindManySchema as TodoFindManySchema } from '../findManyTodo.schema';
import { PostFindManySchema as PostFindManySchema } from '../findManyPost.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { GroupCountOutputTypeArgsObjectSchema as GroupCountOutputTypeArgsObjectSchema } from './GroupCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  Members: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GroupIncludeObjectSchema: z.ZodType<Prisma.GroupInclude> = makeSchema() as unknown as z.ZodType<Prisma.GroupInclude>;
export const GroupIncludeObjectZodSchema = makeSchema();
