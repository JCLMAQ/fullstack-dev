
import {ApiProperty} from '@nestjs/swagger'




export class CreateTodoDto {
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
orderTodo: number ;
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
