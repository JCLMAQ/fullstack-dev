
import {ApiProperty} from '@nestjs/swagger'


export class UserTodoLinkDto {
  @ApiProperty({
  type: 'boolean',
})
isAuthor: boolean ;
@ApiProperty({
  type: 'boolean',
})
isAssigned: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
@ApiProperty({
  type: 'string',
})
comment: string ;
}
