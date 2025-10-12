
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {PostEntity} from './post.entity'


export class PostLikeEntity {
  @ApiProperty({
  type: 'string',
})
user_id: string ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
})
user?: UserEntity ;
@ApiProperty({
  type: 'string',
})
post_id: string ;
@ApiProperty({
  type: () => PostEntity,
  required: false,
})
post?: PostEntity ;
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
}
