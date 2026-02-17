import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'email', 'lastName', 'firstName', 'title', 'nickName', 'Gender', 'social', 'languageId', 'photoUrl', 'dateOfBirth', 'hasEmergencyContact', 'emergencyContactName', 'emergencyContactPhone', 'position', 'preference', 'jobTitle', 'isValidated', 'isSuspended', 'managerId', 'Roles', 'Permissions', 'isTfaEnable', 'tfaSecret', 'passWordFaker', 'groupId'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;