
import {ApiProperty} from '@nestjs/swagger'




export class CreateRefreshTokenDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'string',
})
userId: string ;
@ApiProperty({
  type: 'string',
})
tokenId: string ;
}
