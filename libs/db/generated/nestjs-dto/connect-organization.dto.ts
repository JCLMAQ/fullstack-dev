
import {ApiProperty} from '@nestjs/swagger'




export class ConnectOrganizationDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
id?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
name?: string ;
}
