
import {TodoState} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {OrganizationEntity} from './organization.entity'
import {GroupEntity} from './group.entity'
import {UserTodoLinkEntity} from './userTodoLink.entity'
import {TaskEntity} from './task.entity'


export class TodoEntity {
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
orderTodo: number ;
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
  enum: TodoState,
  enumName: 'TodoState',
})
todoState: TodoState ;
@ApiProperty({
  type: () => TodoEntity,
  required: false,
  nullable: true,
})
mainTodo?: TodoEntity  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
mainTodoId: string  | null;
@ApiProperty({
  type: () => TodoEntity,
  isArray: true,
  required: false,
})
SubTodos?: TodoEntity[] ;
@ApiProperty({
  type: () => UserTodoLinkEntity,
  isArray: true,
  required: false,
})
Users?: UserTodoLinkEntity[] ;
@ApiProperty({
  type: () => TaskEntity,
  isArray: true,
  required: false,
})
Tasks?: TaskEntity[] ;
}
