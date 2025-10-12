
import {ApiProperty} from '@nestjs/swagger'




export class UpdateConfigParamDto {
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
name?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
value?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
utility?: string ;
}
