
import {ApiProperty} from '@nestjs/swagger'




export class ConnectProfileDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
