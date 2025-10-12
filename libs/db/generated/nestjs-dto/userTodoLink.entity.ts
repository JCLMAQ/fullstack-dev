
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {TodoEntity} from './todo.entity'


export class UserTodoLinkEntity {
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
  type: () => TodoEntity,
  required: false,
})
todo?: TodoEntity ;
@ApiProperty({
  type: 'string',
})
todoId: string ;
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
