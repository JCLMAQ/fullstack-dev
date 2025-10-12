
import {ApiProperty} from '@nestjs/swagger'




export class UpdateGroupDto {
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
orderGroup?: number ;
@ApiProperty({
  type: 'string',
  required: false,
})
name?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
description?: string  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isActiv?: Date  | null;
}
