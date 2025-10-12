
import {ApiProperty} from '@nestjs/swagger'




export class UpdatePostDto {
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
  nullable: true,
})
orderPost?: number  | null;
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
