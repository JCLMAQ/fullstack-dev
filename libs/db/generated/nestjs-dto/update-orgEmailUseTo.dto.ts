
import {ApiProperty} from '@nestjs/swagger'




export class UpdateOrgEmailUseToDto {
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
useTo?: string ;
@ApiProperty({
  type: 'boolean',
  required: false,
})
isActiv?: boolean ;
}
