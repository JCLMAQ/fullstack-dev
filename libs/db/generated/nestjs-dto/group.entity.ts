
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {TaskEntity} from './task.entity'
import {TodoEntity} from './todo.entity'
import {PostEntity} from './post.entity'
import {FileEntity} from './file.entity'
import {OrganizationEntity} from './organization.entity'


export class GroupEntity {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
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
  type: 'boolean',
})
isPublic: boolean ;
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
  type: 'integer',
  format: 'int32',
})
orderGroup: number ;
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
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isActiv: Date  | null;
@ApiProperty({
  type: () => UserEntity,
  isArray: true,
  required: false,
})
Users?: UserEntity[] ;
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
@ApiProperty({
  type: () => PostEntity,
  isArray: true,
  required: false,
})
Posts?: PostEntity[] ;
@ApiProperty({
  type: () => FileEntity,
  isArray: true,
  required: false,
})
Files?: FileEntity[] ;
@ApiProperty({
  type: () => OrganizationEntity,
  required: false,
})
org?: OrganizationEntity ;
@ApiProperty({
  type: 'string',
})
orgId: string ;
}
