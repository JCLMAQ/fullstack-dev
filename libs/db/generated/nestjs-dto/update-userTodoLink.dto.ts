
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserTodoLinkDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
comment?: string ;
}
