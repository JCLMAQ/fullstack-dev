import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  orderGroup: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  ownerId: z.boolean().optional(),
  isActiv: z.boolean().optional(),
  Members: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  orgId: z.boolean().optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GroupSelectObjectSchema: z.ZodType<Prisma.GroupSelect> = makeSchema() as unknown as z.ZodType<Prisma.GroupSelect>;
export const GroupSelectObjectZodSchema = makeSchema();
