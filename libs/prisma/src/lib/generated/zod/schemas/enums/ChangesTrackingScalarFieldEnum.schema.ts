import * as z from 'zod';

export const ChangesTrackingScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'doneAt', 'modifiedById', 'modelName', 'recordId', 'operation', 'newData', 'oldData'])

export type ChangesTrackingScalarFieldEnum = z.infer<typeof ChangesTrackingScalarFieldEnumSchema>;