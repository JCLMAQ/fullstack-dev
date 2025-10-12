
import {ApiProperty} from '@nestjs/swagger'




export class CreateOrgEmailUseToDto {
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
useTo: string ;
@ApiProperty({
  type: 'boolean',
})
isActiv: boolean ;
}
