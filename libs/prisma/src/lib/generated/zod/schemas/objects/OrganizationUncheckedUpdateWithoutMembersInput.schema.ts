import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrgEmailUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as OrgEmailUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './OrgEmailUncheckedUpdateManyWithoutOrgNestedInput.schema';
import { OrgDomainUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as OrgDomainUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './OrgDomainUncheckedUpdateManyWithoutOrgNestedInput.schema';
import { OrganizationUncheckedUpdateManyWithoutMainOrgNestedInputObjectSchema as OrganizationUncheckedUpdateManyWithoutMainOrgNestedInputObjectSchema } from './OrganizationUncheckedUpdateManyWithoutMainOrgNestedInput.schema';
import { PostUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as PostUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutOrgNestedInput.schema';
import { GroupUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as GroupUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './GroupUncheckedUpdateManyWithoutOrgNestedInput.schema';
import { FileUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as FileUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutOrgNestedInput.schema';
import { TaskUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as TaskUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './TaskUncheckedUpdateManyWithoutOrgNestedInput.schema';
import { TodoUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as TodoUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './TodoUncheckedUpdateManyWithoutOrgNestedInput.schema';
import { ImageUncheckedUpdateManyWithoutOrgNestedInputObjectSchema as ImageUncheckedUpdateManyWithoutOrgNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutOrgNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeleted: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  emailITAdmin: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  webSite: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mainOrgId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  OrgEmails: z.lazy(() => OrgEmailUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  OrgDomains: z.lazy(() => OrgDomainUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  OrgEntity: z.lazy(() => OrganizationUncheckedUpdateManyWithoutMainOrgNestedInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUncheckedUpdateManyWithoutOrgNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedUpdateWithoutMembersInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutMembersInput>;
export const OrganizationUncheckedUpdateWithoutMembersInputObjectZodSchema = makeSchema();
