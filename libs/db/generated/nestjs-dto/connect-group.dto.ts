
import {ApiProperty} from '@nestjs/swagger'




export class ConnectGroupDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
