
import {TaskState} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {OrganizationEntity} from './organization.entity'
import {GroupEntity} from './group.entity'
import {UserTaskLinkEntity} from './userTaskLink.entity'
import {TodoEntity} from './todo.entity'


export class TaskEntity {
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
  type: 'integer',
  format: 'int32',
})
orderTask: number ;
@ApiProperty({
  type: 'string',
})
title: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
content: string  | null;
@ApiProperty({
  enum: TaskState,
  enumName: 'TaskState',
})
taskState: TaskState ;
@ApiProperty({
  type: () => TaskEntity,
  required: false,
  nullable: true,
})
mainTask?: TaskEntity  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
mainTaskId: string  | null;
@ApiProperty({
  type: () => TaskEntity,
  isArray: true,
  required: false,
})
SubTasks?: TaskEntity[] ;
@ApiProperty({
  type: () => UserTaskLinkEntity,
  isArray: true,
  required: false,
})
Users?: UserTaskLinkEntity[] ;
@ApiProperty({
  type: () => TodoEntity,
  required: false,
  nullable: true,
})
todo?: TodoEntity  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
todoId: string  | null;
}
