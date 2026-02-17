import * as z from 'zod';
export const OrganizationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    numSeq: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isPublic: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    name: z.number(),
    description: z.number(),
    address: z.number(),
    emailITAdmin: z.number(),
    webSite: z.number(),
    OrgEmails: z.number(),
    OrgDomains: z.number(),
    mainOrg: z.number(),
    mainOrgId: z.number(),
    OrgEntity: z.number(),
    Members: z.number(),
    Posts: z.number(),
    Groups: z.number(),
    Files: z.number(),
    Tasks: z.number(),
    Todos: z.number(),
    Images: z.number()
  }).optional(),
  _sum: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    emailITAdmin: z.string().nullable(),
    webSite: z.string().nullable(),
    mainOrgId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    emailITAdmin: z.string().nullable(),
    webSite: z.string().nullable(),
    mainOrgId: z.string().nullable()
  }).nullable().optional()});