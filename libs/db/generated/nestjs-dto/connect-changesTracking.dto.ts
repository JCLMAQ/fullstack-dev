
import {ApiProperty} from '@nestjs/swagger'




export class ConnectChangesTrackingDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
