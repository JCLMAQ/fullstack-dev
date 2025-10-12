
import {ApiProperty} from '@nestjs/swagger'




export class ConnectTodoDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
}
