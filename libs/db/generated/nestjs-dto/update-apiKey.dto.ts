
import {ApiProperty} from '@nestjs/swagger'




export class UpdateApiKeyDto {
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
key?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
uuid?: string ;
}
