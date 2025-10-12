
import {ApiExtraModels,ApiProperty} from '@nestjs/swagger'

export class UserTodoLinkUserIdTodoIdUniqueInputDto {
    @ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: 'string',
})
todoId: string ;
  }

@ApiExtraModels(UserTodoLinkUserIdTodoIdUniqueInputDto)
export class ConnectUserTodoLinkDto {
  @ApiProperty({
  type: UserTodoLinkUserIdTodoIdUniqueInputDto,
})
userId_todoId: UserTodoLinkUserIdTodoIdUniqueInputDto ;
}
