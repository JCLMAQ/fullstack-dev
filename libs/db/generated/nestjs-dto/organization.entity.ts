
import {Prisma} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'
import {OrgEmailEntity} from './orgEmail.entity'
import {OrgDomainEntity} from './orgDomain.entity'
import {UserEntity} from './user.entity'
import {PostEntity} from './post.entity'
import {GroupEntity} from './group.entity'
import {FileEntity} from './file.entity'
import {TaskEntity} from './task.entity'
import {TodoEntity} from './todo.entity'


export class OrganizationEntity {
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
name: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
address: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
})
emailITAdmin: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
webSite: string  | null;
@ApiProperty({
  type: () => OrgEmailEntity,
  isArray: true,
  required: false,
})
OrgEmails?: OrgEmailEntity[] ;
@ApiProperty({
  type: () => OrgDomainEntity,
  isArray: true,
  required: false,
})
OrgDomains?: OrgDomainEntity[] ;
@ApiProperty({
  type: () => OrganizationEntity,
  required: false,
  nullable: true,
})
mainOrg?: OrganizationEntity  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
mainOrgId: string  | null;
@ApiProperty({
  type: () => OrganizationEntity,
  isArray: true,
  required: false,
})
OrgEntity?: OrganizationEntity[] ;
@ApiProperty({
  type: () => UserEntity,
  isArray: true,
  required: false,
})
Members?: UserEntity[] ;
@ApiProperty({
  type: () => PostEntity,
  isArray: true,
  required: false,
})
Posts?: PostEntity[] ;
@ApiProperty({
  type: () => GroupEntity,
  isArray: true,
  required: false,
})
Groups?: GroupEntity[] ;
@ApiProperty({
  type: () => FileEntity,
  isArray: true,
  required: false,
})
Files?: FileEntity[] ;
@ApiProperty({
  type: () => TaskEntity,
  isArray: true,
  required: false,
})
Tasks?: TaskEntity[] ;
@ApiProperty({
  type: () => TodoEntity,
  isArray: true,
  required: false,
})
Todos?: TodoEntity[] ;
}
