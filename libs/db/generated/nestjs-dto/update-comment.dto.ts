
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCommentDto {
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
  type: 'integer',
  format: 'int32',
  required: false,
})
orderComment?: number ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
content?: string  | null;
}
