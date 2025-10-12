
import {ApiProperty} from '@nestjs/swagger'




export class CreateTaskDto {
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
})
orderTask: number ;
@ApiProperty({
  type: 'string',
})
title: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
content?: string  | null;
}
