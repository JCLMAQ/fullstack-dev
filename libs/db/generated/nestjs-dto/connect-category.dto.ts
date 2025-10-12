
import {ApiProperty} from '@nestjs/swagger'




export class ConnectCategoryDto {
  @ApiProperty({
  type: 'string',
})
id: string ;
}
