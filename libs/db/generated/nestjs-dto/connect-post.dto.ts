
import {ApiProperty} from '@nestjs/swagger'




export class ConnectPostDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
}
