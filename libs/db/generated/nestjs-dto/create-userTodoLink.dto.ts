
import {ApiProperty} from '@nestjs/swagger'




export class CreateUserTodoLinkDto {
  @ApiProperty({
  type: 'string',
})
comment: string ;
}
