
import {ApiProperty} from '@nestjs/swagger'




export class ConnectImageDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
