import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailFindManySchema as OrgEmailFindManySchema } from '../findManyOrgEmail.schema';
import { OrgDomainFindManySchema as OrgDomainFindManySchema } from '../findManyOrgDomain.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { OrganizationFindManySchema as OrganizationFindManySchema } from '../findManyOrganization.schema';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { PostFindManySchema as PostFindManySchema } from '../findManyPost.schema';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { TodoFindManySchema as TodoFindManySchema } from '../findManyTodo.schema';
import { ImageFindManySchema as ImageFindManySchema } from '../findManyImage.schema';
import { OrganizationCountOutputTypeArgsObjectSchema as OrganizationCountOutputTypeArgsObjectSchema } from './OrganizationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  numSeq: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  address: z.boolean().optional(),
  emailITAdmin: z.boolean().optional(),
  webSite: z.boolean().optional(),
  OrgEmails: z.union([z.boolean(), z.lazy(() => OrgEmailFindManySchema)]).optional(),
  OrgDomains: z.union([z.boolean(), z.lazy(() => OrgDomainFindManySchema)]).optional(),
  mainOrg: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  mainOrgId: z.boolean().optional(),
  OrgEntity: z.union([z.boolean(), z.lazy(() => OrganizationFindManySchema)]).optional(),
  Members: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
  Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrganizationSelectObjectSchema: z.ZodType<Prisma.OrganizationSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationSelect>;
export const OrganizationSelectObjectZodSchema = makeSchema();
