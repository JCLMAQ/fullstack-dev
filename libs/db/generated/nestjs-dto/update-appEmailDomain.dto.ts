
import {ApiProperty} from '@nestjs/swagger'




export class UpdateAppEmailDomainDto {
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
domain?: string ;
@ApiProperty({
  type: 'boolean',
  required: false,
})
allowed?: boolean ;
}
