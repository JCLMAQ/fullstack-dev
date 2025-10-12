
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRefreshTokenDto {
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
})
userId?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
tokenId?: string ;
}
