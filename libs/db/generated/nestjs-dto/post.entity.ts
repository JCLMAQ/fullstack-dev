
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {OrganizationEntity} from './organization.entity'
import {GroupEntity} from './group.entity'
import {CategoryEntity} from './category.entity'
import {CommentEntity} from './comment.entity'
import {PostLikeEntity} from './postLike.entity'


export class PostEntity {
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
})
published: boolean ;
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
  type: 'boolean',
})
isPublic: boolean ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
})
owner?: UserEntity ;
@ApiProperty({
  type: 'string',
})
ownerId: string ;
@ApiProperty({
  type: () => OrganizationEntity,
  required: false,
})
org?: OrganizationEntity ;
@ApiProperty({
  type: 'string',
})
orgId: string ;
@ApiProperty({
  type: () => GroupEntity,
  isArray: true,
  required: false,
})
groups?: GroupEntity[] ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
orderPost: number  | null;
@ApiProperty({
  type: 'string',
})
title: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
content: string  | null;
@ApiProperty({
  type: () => CategoryEntity,
  isArray: true,
  required: false,
})
Categories?: CategoryEntity[] ;
@ApiProperty({
  type: () => CommentEntity,
  isArray: true,
  required: false,
})
Comments?: CommentEntity[] ;
@ApiProperty({
  type: () => PostLikeEntity,
  isArray: true,
  required: false,
})
LikedBys?: PostLikeEntity[] ;
}
