
import {TokenType} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'


export class TokenEntity {
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
  type: 'string',
  nullable: true,
})
tokenId: string  | null;
@ApiProperty({
  enum: TokenType,
  enumName: 'TokenType',
})
type: TokenType ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
emailToken: string  | null;
@ApiProperty({
  type: 'boolean',
})
valid: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
expiration: Date ;
@ApiProperty({
  type: () => UserEntity,
  required: false,
})
user?: UserEntity ;
@ApiProperty({
  type: 'string',
})
userId: string ;
}
