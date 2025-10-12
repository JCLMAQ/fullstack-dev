
import {Gender,Language,PermissionClaim,Position,Prisma,Role,Title} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserDto {
  @ApiProperty({
  type: 'boolean',
  default: false,
  required: false,
  nullable: true,
})
published?: boolean  | null;
@ApiProperty({
  type: 'boolean',
  default: true,
  required: false,
  nullable: true,
})
isPublic?: boolean  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  default: 0,
  required: false,
  nullable: true,
})
isDeleted?: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'string',
  required: false,
})
email?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
lastName?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
firstName?: string  | null;
@ApiProperty({
  enum: Title,
  enumName: 'Title',
  required: false,
  nullable: true,
})
title?: Title  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
nickName?: string  | null;
@ApiProperty({
  enum: Gender,
  enumName: 'Gender',
  default: 'UNKNOWN',
  required: false,
  nullable: true,
})
Gender?: Gender  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
social?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  enum: Language,
  enumName: 'Language',
  default: 'en',
  required: false,
  nullable: true,
})
Language?: Language  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
photoUrl?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
dateOfBirth?: Date  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
emergencyContactName?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
emergencyContactPhone?: string  | null;
@ApiProperty({
  enum: Position,
  enumName: 'Position',
  default: 'Individual',
  required: false,
  nullable: true,
})
position?: Position  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
jobTitle?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isValidated?: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isSuspended?: Date  | null;
@ApiProperty({
  isArray: true,
  enum: Role,
  enumName: 'Role',
  required: false,
})
Roles?: Role[] ;
@ApiProperty({
  isArray: true,
  enum: PermissionClaim,
  enumName: 'PermissionClaim',
  required: false,
})
Permissions?: PermissionClaim[] ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
tfaSecret?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
passWordFaker?: string  | null;
}
