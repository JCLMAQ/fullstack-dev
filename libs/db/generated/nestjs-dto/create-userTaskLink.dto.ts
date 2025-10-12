
import {ApiProperty} from '@nestjs/swagger'




export class CreateUserTaskLinkDto {
  @ApiProperty({
  type: 'string',
})
comment: string ;
}
