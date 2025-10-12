
import {ApiProperty} from '@nestjs/swagger'




export class ConnectApiKeyDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
