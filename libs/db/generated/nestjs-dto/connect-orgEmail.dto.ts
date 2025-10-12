
import {ApiProperty} from '@nestjs/swagger'




export class ConnectOrgEmailDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
