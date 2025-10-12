
import {ApiProperty} from '@nestjs/swagger'




export class CreateProfileDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
orderProfile: number ;
@ApiProperty({
  type: 'string',
})
bio: string ;
}
