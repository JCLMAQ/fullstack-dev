
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'


export class UserFollowerEntity {
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
follower_id: string ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
})
follower?: UserEntity ;
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
