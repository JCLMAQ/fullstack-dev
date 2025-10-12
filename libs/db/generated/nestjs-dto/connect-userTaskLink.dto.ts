
import {ApiExtraModels,ApiProperty} from '@nestjs/swagger'

export class UserTaskLinkUserIdTaskIdUniqueInputDto {
    @ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: 'string',
})
taskId: string ;
  }

@ApiExtraModels(UserTaskLinkUserIdTaskIdUniqueInputDto)
export class ConnectUserTaskLinkDto {
  @ApiProperty({
  type: UserTaskLinkUserIdTaskIdUniqueInputDto,
})
userId_taskId: UserTaskLinkUserIdTaskIdUniqueInputDto ;
}
