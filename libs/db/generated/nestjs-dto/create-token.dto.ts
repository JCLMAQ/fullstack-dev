
import {TokenType} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class CreateTokenDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
tokenId?: string  | null;
@ApiProperty({
  enum: TokenType,
  enumName: 'TokenType',
})
type: TokenType ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
emailToken?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
expiration: Date ;
}
