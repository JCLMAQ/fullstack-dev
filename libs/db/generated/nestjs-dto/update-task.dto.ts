
import {ApiProperty} from '@nestjs/swagger'




export class UpdateTaskDto {
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
orderTask?: number ;
@ApiProperty({
  type: 'string',
  required: false,
})
title?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
content?: string  | null;
}
