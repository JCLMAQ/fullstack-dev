
import {ApiProperty} from '@nestjs/swagger'




export class UpdateAccountValidationDto {
  @ApiProperty({
  type: 'boolean',
  default: false,
  required: false,
  nullable: true,
})
published?: boolean  | null;
@ApiProperty({
  type: 'boolean',
  default: true,
  required: false,
  nullable: true,
})
isPublic?: boolean  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  default: 0,
  required: false,
  nullable: true,
})
isDeleted?: number  | null;
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
emailToken?: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
timeStamp?: Date ;
}
