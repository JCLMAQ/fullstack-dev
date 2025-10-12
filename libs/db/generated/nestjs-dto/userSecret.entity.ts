
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'


export class UserSecretEntity {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
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
  type: () => UserEntity,
  required: false,
})
user?: UserEntity ;
@ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
pwdHash: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
salt: string  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
isAdmin: boolean  | null;
}
