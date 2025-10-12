
import {ApiProperty} from '@nestjs/swagger'




export class UpdateTodoDto {
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
orderTodo?: number ;
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
