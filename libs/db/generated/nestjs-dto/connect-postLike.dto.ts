
import {ApiExtraModels,ApiProperty} from '@nestjs/swagger'

export class PostLikeUserIdPostIdUniqueInputDto {
    @ApiProperty({
  type: 'string',
})
user_id: string ;
@ApiProperty({
  type: 'string',
})
post_id: string ;
  }

@ApiExtraModels(PostLikeUserIdPostIdUniqueInputDto)
export class ConnectPostLikeDto {
  @ApiProperty({
  type: PostLikeUserIdPostIdUniqueInputDto,
})
user_id_post_id: PostLikeUserIdPostIdUniqueInputDto ;
}
