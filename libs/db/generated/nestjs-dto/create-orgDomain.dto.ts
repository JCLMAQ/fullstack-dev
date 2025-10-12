
import {ApiProperty} from '@nestjs/swagger'




export class CreateOrgDomainDto {
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
domainName: string ;
@ApiProperty({
  type: 'string',
})
extension: string ;
}
