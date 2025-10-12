
import {ApiProperty} from '@nestjs/swagger'




export class ConnectUserSecretDto {
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
}
