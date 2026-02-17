import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrgEmailCreateNestedManyWithoutOrgInputObjectSchema as OrgEmailCreateNestedManyWithoutOrgInputObjectSchema } from './OrgEmailCreateNestedManyWithoutOrgInput.schema';
import { OrgDomainCreateNestedManyWithoutOrgInputObjectSchema as OrgDomainCreateNestedManyWithoutOrgInputObjectSchema } from './OrgDomainCreateNestedManyWithoutOrgInput.schema';
import { OrganizationCreateNestedOneWithoutOrgEntityInputObjectSchema as OrganizationCreateNestedOneWithoutOrgEntityInputObjectSchema } from './OrganizationCreateNestedOneWithoutOrgEntityInput.schema';
import { OrganizationCreateNestedManyWithoutMainOrgInputObjectSchema as OrganizationCreateNestedManyWithoutMainOrgInputObjectSchema } from './OrganizationCreateNestedManyWithoutMainOrgInput.schema';
import { PostCreateNestedManyWithoutOrgInputObjectSchema as PostCreateNestedManyWithoutOrgInputObjectSchema } from './PostCreateNestedManyWithoutOrgInput.schema';
import { GroupCreateNestedManyWithoutOrgInputObjectSchema as GroupCreateNestedManyWithoutOrgInputObjectSchema } from './GroupCreateNestedManyWithoutOrgInput.schema';
import { FileCreateNestedManyWithoutOrgInputObjectSchema as FileCreateNestedManyWithoutOrgInputObjectSchema } from './FileCreateNestedManyWithoutOrgInput.schema';
import { TaskCreateNestedManyWithoutOrgInputObjectSchema as TaskCreateNestedManyWithoutOrgInputObjectSchema } from './TaskCreateNestedManyWithoutOrgInput.schema';
import { TodoCreateNestedManyWithoutOrgInputObjectSchema as TodoCreateNestedManyWithoutOrgInputObjectSchema } from './TodoCreateNestedManyWithoutOrgInput.schema';
import { ImageCreateNestedManyWithoutOrgInputObjectSchema as ImageCreateNestedManyWithoutOrgInputObjectSchema } from './ImageCreateNestedManyWithoutOrgInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  name: z.string(),
  description: z.string().optional().nullable(),
  address: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  emailITAdmin: z.string(),
  webSite: z.string().optional().nullable(),
  OrgEmails: z.lazy(() => OrgEmailCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  OrgDomains: z.lazy(() => OrgDomainCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  mainOrg: z.lazy(() => OrganizationCreateNestedOneWithoutOrgEntityInputObjectSchema).optional(),
  OrgEntity: z.lazy(() => OrganizationCreateNestedManyWithoutMainOrgInputObjectSchema).optional(),
  Posts: z.lazy(() => PostCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Images: z.lazy(() => ImageCreateNestedManyWithoutOrgInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateWithoutMembersInput>;
export const OrganizationCreateWithoutMembersInputObjectZodSchema = makeSchema();
