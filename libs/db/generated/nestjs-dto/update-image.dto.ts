
import {ApiProperty} from '@nestjs/swagger'




export class UpdateImageDto {
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
type?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
url?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
associated_id?: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
sequence?: number ;
}
