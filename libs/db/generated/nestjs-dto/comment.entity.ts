
import {ApiProperty} from '@nestjs/swagger'
import {PostEntity} from './post.entity'
import {UserEntity} from './user.entity'


export class CommentEntity {
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
  type: 'integer',
  format: 'int32',
})
orderComment: number ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
content: string  | null;
@ApiProperty({
  type: () => PostEntity,
  required: false,
})
post?: PostEntity ;
@ApiProperty({
  type: 'string',
})
postId: string ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
})
author?: UserEntity ;
@ApiProperty({
  type: 'string',
})
authorId: string ;
}
