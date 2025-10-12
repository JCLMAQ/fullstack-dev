
import {ApiProperty} from '@nestjs/swagger'




export class ConnectScopeDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
