
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {TaskEntity} from './task.entity'


export class UserTaskLinkEntity {
  @ApiProperty({
  type: () => UserEntity,
  required: false,
})
user?: UserEntity ;
@ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: () => TaskEntity,
  required: false,
})
task?: TaskEntity ;
@ApiProperty({
  type: 'string',
})
taskId: string ;
@ApiProperty({
  type: 'boolean',
})
isAuthor: boolean ;
@ApiProperty({
  type: 'boolean',
})
isAssigned: boolean ;
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
  type: 'string',
})
comment: string ;
}
