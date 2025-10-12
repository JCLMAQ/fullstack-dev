
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserTaskLinkDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
comment?: string ;
}
