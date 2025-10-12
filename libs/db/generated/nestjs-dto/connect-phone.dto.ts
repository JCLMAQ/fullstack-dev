
import {ApiProperty} from '@nestjs/swagger'




export class ConnectPhoneDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
