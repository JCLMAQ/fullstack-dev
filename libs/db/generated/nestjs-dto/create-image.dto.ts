
import {ApiProperty} from '@nestjs/swagger'




export class CreateImageDto {
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
type: string ;
@ApiProperty({
  type: 'string',
})
url: string ;
@ApiProperty({
  type: 'string',
})
associated_id: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
sequence: number ;
}
