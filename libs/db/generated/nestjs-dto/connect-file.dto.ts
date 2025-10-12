
import {ApiProperty} from '@nestjs/swagger'




export class ConnectFileDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
id?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
storageName?: string ;
}
