
import {ApiProperty} from '@nestjs/swagger'




export class ConnectRefreshTokenDto {
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
userId?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
tokenId?: string ;
}
