import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCountOutputTypeCountOrgEmailsArgsObjectSchema as OrganizationCountOutputTypeCountOrgEmailsArgsObjectSchema } from './OrganizationCountOutputTypeCountOrgEmailsArgs.schema';
import { OrganizationCountOutputTypeCountOrgDomainsArgsObjectSchema as OrganizationCountOutputTypeCountOrgDomainsArgsObjectSchema } from './OrganizationCountOutputTypeCountOrgDomainsArgs.schema';
import { OrganizationCountOutputTypeCountOrgEntityArgsObjectSchema as OrganizationCountOutputTypeCountOrgEntityArgsObjectSchema } from './OrganizationCountOutputTypeCountOrgEntityArgs.schema';
import { OrganizationCountOutputTypeCountMembersArgsObjectSchema as OrganizationCountOutputTypeCountMembersArgsObjectSchema } from './OrganizationCountOutputTypeCountMembersArgs.schema';
import { OrganizationCountOutputTypeCountPostsArgsObjectSchema as OrganizationCountOutputTypeCountPostsArgsObjectSchema } from './OrganizationCountOutputTypeCountPostsArgs.schema';
import { OrganizationCountOutputTypeCountGroupsArgsObjectSchema as OrganizationCountOutputTypeCountGroupsArgsObjectSchema } from './OrganizationCountOutputTypeCountGroupsArgs.schema';
import { OrganizationCountOutputTypeCountFilesArgsObjectSchema as OrganizationCountOutputTypeCountFilesArgsObjectSchema } from './OrganizationCountOutputTypeCountFilesArgs.schema';
import { OrganizationCountOutputTypeCountTasksArgsObjectSchema as OrganizationCountOutputTypeCountTasksArgsObjectSchema } from './OrganizationCountOutputTypeCountTasksArgs.schema';
import { OrganizationCountOutputTypeCountTodosArgsObjectSchema as OrganizationCountOutputTypeCountTodosArgsObjectSchema } from './OrganizationCountOutputTypeCountTodosArgs.schema';
import { OrganizationCountOutputTypeCountImagesArgsObjectSchema as OrganizationCountOutputTypeCountImagesArgsObjectSchema } from './OrganizationCountOutputTypeCountImagesArgs.schema'

const makeSchema = () => z.object({
  OrgEmails: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountOrgEmailsArgsObjectSchema)]).optional(),
  OrgDomains: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountOrgDomainsArgsObjectSchema)]).optional(),
  OrgEntity: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountOrgEntityArgsObjectSchema)]).optional(),
  Members: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountMembersArgsObjectSchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountPostsArgsObjectSchema)]).optional(),
  Groups: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountGroupsArgsObjectSchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountFilesArgsObjectSchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountTasksArgsObjectSchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountTodosArgsObjectSchema)]).optional(),
  Images: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountImagesArgsObjectSchema)]).optional()
}).strict();
export const OrganizationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrganizationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCountOutputTypeSelect>;
export const OrganizationCountOutputTypeSelectObjectZodSchema = makeSchema();
