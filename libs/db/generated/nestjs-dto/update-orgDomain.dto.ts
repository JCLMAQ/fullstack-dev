
import {ApiProperty} from '@nestjs/swagger'




export class UpdateOrgDomainDto {
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
domainName?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
extension?: string ;
}
