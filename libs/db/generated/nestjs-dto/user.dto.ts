
import {Gender,Language,PermissionClaim,Position,Prisma,Role,Title} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'


export class UserDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
numSeq: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
published: boolean  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
isPublic: boolean  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
isDeleted: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isDeletedDT: Date  | null;
@ApiProperty({
  type: 'string',
})
email: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
lastName: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
firstName: string  | null;
@ApiProperty({
  enum: Title,
  enumName: 'Title',
  nullable: true,
})
title: Title  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
nickName: string  | null;
@ApiProperty({
  enum: Gender,
  enumName: 'Gender',
  nullable: true,
})
Gender: Gender  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
social: Prisma.JsonValue  | null;
@ApiProperty({
  enum: Language,
  enumName: 'Language',
  nullable: true,
})
Language: Language  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
photoUrl: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
dateOfBirth: Date  | null;
@ApiProperty({
  type: 'boolean',
})
hasEmergencyContact: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
emergencyContactName: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
emergencyContactPhone: string  | null;
@ApiProperty({
  enum: Position,
  enumName: 'Position',
  nullable: true,
})
position: Position  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
jobTitle: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isValidated: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isSuspended: Date  | null;
@ApiProperty({
  isArray: true,
  enum: Role,
  enumName: 'Role',
})
Roles: Role[] ;
@ApiProperty({
  isArray: true,
  enum: PermissionClaim,
  enumName: 'PermissionClaim',
})
Permissions: PermissionClaim[] ;
@ApiProperty({
  type: 'boolean',
})
isTfaEnable: boolean ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
tfaSecret: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
passWordFaker: string  | null;
}
