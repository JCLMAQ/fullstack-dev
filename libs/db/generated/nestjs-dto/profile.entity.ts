
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'


export class ProfileEntity {
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
  type: 'boolean',
})
published: boolean ;
@ApiProperty({
  type: 'boolean',
})
isPublic: boolean ;
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
  type: 'integer',
  format: 'int32',
})
orderProfile: number ;
@ApiProperty({
  type: () => UserEntity,
  isArray: true,
  required: false,
})
Users?: UserEntity[] ;
@ApiProperty({
  type: 'string',
})
bio: string ;
}
