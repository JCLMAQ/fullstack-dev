
import {ApiProperty} from '@nestjs/swagger'




export class ConnectTaskDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
}
