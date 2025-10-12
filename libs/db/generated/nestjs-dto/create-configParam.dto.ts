
import {ApiProperty} from '@nestjs/swagger'




export class CreateConfigParamDto {
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
name: string ;
@ApiProperty({
  type: 'string',
})
value: string ;
@ApiProperty({
  type: 'string',
})
utility: string ;
}
