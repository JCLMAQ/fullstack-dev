import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrgEmailUpdateManyWithoutOrgNestedInputObjectSchema as OrgEmailUpdateManyWithoutOrgNestedInputObjectSchema } from './OrgEmailUpdateManyWithoutOrgNestedInput.schema';
import { OrganizationUpdateOneWithoutOrgEntityNestedInputObjectSchema as OrganizationUpdateOneWithoutOrgEntityNestedInputObjectSchema } from './OrganizationUpdateOneWithoutOrgEntityNestedInput.schema';
import { OrganizationUpdateManyWithoutMainOrgNestedInputObjectSchema as OrganizationUpdateManyWithoutMainOrgNestedInputObjectSchema } from './OrganizationUpdateManyWithoutMainOrgNestedInput.schema';
import { UserUpdateManyWithoutOrgsNestedInputObjectSchema as UserUpdateManyWithoutOrgsNestedInputObjectSchema } from './UserUpdateManyWithoutOrgsNestedInput.schema';
import { PostUpdateManyWithoutOrgNestedInputObjectSchema as PostUpdateManyWithoutOrgNestedInputObjectSchema } from './PostUpdateManyWithoutOrgNestedInput.schema';
import { GroupUpdateManyWithoutOrgNestedInputObjectSchema as GroupUpdateManyWithoutOrgNestedInputObjectSchema } from './GroupUpdateManyWithoutOrgNestedInput.schema';
import { FileUpdateManyWithoutOrgNestedInputObjectSchema as FileUpdateManyWithoutOrgNestedInputObjectSchema } from './FileUpdateManyWithoutOrgNestedInput.schema';
import { TaskUpdateManyWithoutOrgNestedInputObjectSchema as TaskUpdateManyWithoutOrgNestedInputObjectSchema } from './TaskUpdateManyWithoutOrgNestedInput.schema';
import { TodoUpdateManyWithoutOrgNestedInputObjectSchema as TodoUpdateManyWithoutOrgNestedInputObjectSchema } from './TodoUpdateManyWithoutOrgNestedInput.schema';
import { ImageUpdateManyWithoutOrgNestedInputObjectSchema as ImageUpdateManyWithoutOrgNestedInputObjectSchema } from './ImageUpdateManyWithoutOrgNestedInput.schema'

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
  OrgEmails: z.lazy(() => OrgEmailUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  mainOrg: z.lazy(() => OrganizationUpdateOneWithoutOrgEntityNestedInputObjectSchema).optional(),
  OrgEntity: z.lazy(() => OrganizationUpdateManyWithoutMainOrgNestedInputObjectSchema).optional(),
  Members: z.lazy(() => UserUpdateManyWithoutOrgsNestedInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUpdateManyWithoutOrgNestedInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUpdateManyWithoutOrgNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateWithoutOrgDomainsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithoutOrgDomainsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithoutOrgDomainsInput>;
export const OrganizationUpdateWithoutOrgDomainsInputObjectZodSchema = makeSchema();
