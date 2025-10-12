
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {OrganizationEntity} from './organization.entity'
import {GroupEntity} from './group.entity'


export class FileEntity {
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
})
published: boolean ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
isDeleted: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isDeletedDT: Date  | null;
@ApiProperty({
  type: 'boolean',
})
isPublic: boolean ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
})
owner?: UserEntity ;
@ApiProperty({
  type: 'string',
})
ownerId: string ;
@ApiProperty({
  type: () => OrganizationEntity,
  required: false,
})
org?: OrganizationEntity ;
@ApiProperty({
  type: 'string',
})
orgId: string ;
@ApiProperty({
  type: () => GroupEntity,
  isArray: true,
  required: false,
})
groups?: GroupEntity[] ;
@ApiProperty({
  type: 'string',
})
name: string ;
@ApiProperty({
  type: 'string',
})
storageName: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
type: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
data: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
size: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isArchived: Date  | null;
}
