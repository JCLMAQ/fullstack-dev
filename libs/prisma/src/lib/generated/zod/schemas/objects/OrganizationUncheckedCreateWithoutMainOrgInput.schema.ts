import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrgEmailUncheckedCreateNestedManyWithoutOrgInputObjectSchema as OrgEmailUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './OrgEmailUncheckedCreateNestedManyWithoutOrgInput.schema';
import { OrgDomainUncheckedCreateNestedManyWithoutOrgInputObjectSchema as OrgDomainUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './OrgDomainUncheckedCreateNestedManyWithoutOrgInput.schema';
import { OrganizationUncheckedCreateNestedManyWithoutMainOrgInputObjectSchema as OrganizationUncheckedCreateNestedManyWithoutMainOrgInputObjectSchema } from './OrganizationUncheckedCreateNestedManyWithoutMainOrgInput.schema';
import { UserUncheckedCreateNestedManyWithoutOrgsInputObjectSchema as UserUncheckedCreateNestedManyWithoutOrgsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutOrgsInput.schema';
import { PostUncheckedCreateNestedManyWithoutOrgInputObjectSchema as PostUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutOrgInput.schema';
import { GroupUncheckedCreateNestedManyWithoutOrgInputObjectSchema as GroupUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutOrgInput.schema';
import { FileUncheckedCreateNestedManyWithoutOrgInputObjectSchema as FileUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutOrgInput.schema';
import { TaskUncheckedCreateNestedManyWithoutOrgInputObjectSchema as TaskUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutOrgInput.schema';
import { TodoUncheckedCreateNestedManyWithoutOrgInputObjectSchema as TodoUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutOrgInput.schema';
import { ImageUncheckedCreateNestedManyWithoutOrgInputObjectSchema as ImageUncheckedCreateNestedManyWithoutOrgInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutOrgInput.schema'

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
  OrgEmails: z.lazy(() => OrgEmailUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  OrgDomains: z.lazy(() => OrgDomainUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  OrgEntity: z.lazy(() => OrganizationUncheckedCreateNestedManyWithoutMainOrgInputObjectSchema).optional(),
  Members: z.lazy(() => UserUncheckedCreateNestedManyWithoutOrgsInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutOrgInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutMainOrgInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutMainOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateWithoutMainOrgInput>;
export const OrganizationUncheckedCreateWithoutMainOrgInputObjectZodSchema = makeSchema();
