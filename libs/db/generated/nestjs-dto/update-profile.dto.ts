
import {ApiProperty} from '@nestjs/swagger'




export class UpdateProfileDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
orderProfile?: number ;
@ApiProperty({
  type: 'string',
  required: false,
})
bio?: string ;
}
