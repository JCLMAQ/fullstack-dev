
import {ApiExtraModels,ApiProperty} from '@nestjs/swagger'

export class UserFollowerUserIdFollowerIdUniqueInputDto {
    @ApiProperty({
  type: 'string',
})
user_id: string ;
@ApiProperty({
  type: 'string',
})
follower_id: string ;
  }

@ApiExtraModels(UserFollowerUserIdFollowerIdUniqueInputDto)
export class ConnectUserFollowerDto {
  @ApiProperty({
  type: UserFollowerUserIdFollowerIdUniqueInputDto,
})
user_id_follower_id: UserFollowerUserIdFollowerIdUniqueInputDto ;
}
