
import {ApiProperty} from '@nestjs/swagger'




export class ConnectStoryDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
}
