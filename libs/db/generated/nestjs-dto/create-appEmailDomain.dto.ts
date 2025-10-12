
import {ApiProperty} from '@nestjs/swagger'




export class CreateAppEmailDomainDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'string',
})
domain: string ;
@ApiProperty({
  type: 'boolean',
})
allowed: boolean ;
}
