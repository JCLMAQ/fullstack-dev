
import {ApiProperty} from '@nestjs/swagger'




export class ConnectAccountValidationDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
id?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
emailToken?: string ;
}
