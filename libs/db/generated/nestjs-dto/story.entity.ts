
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'


export class StoryEntity {
  @ApiProperty({
  type: 'string',
})
id: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
numSeq: number ;
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
  nullable: true,
})
published: boolean  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
isPublic: boolean  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
isDeleted: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isDeletedDT: Date  | null;
@ApiProperty({
  type: 'string',
})
caption: string ;
@ApiProperty({
  type: 'string',
})
user_id: string ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
})
user?: UserEntity ;
}
