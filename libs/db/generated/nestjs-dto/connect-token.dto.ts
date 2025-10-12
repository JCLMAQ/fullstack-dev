
import {ApiProperty} from '@nestjs/swagger'




export class ConnectTokenDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
id?: number ;
@ApiProperty({
  type: 'string',
  required: false,
})
tokenId?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
emailToken?: string ;
}
