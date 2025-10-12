
import {PhoneType} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class UpdatePhoneDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
countryCode?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
number?: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
extension?: string  | null;
@ApiProperty({
  enum: PhoneType,
  enumName: 'PhoneType',
  default: 'Mobile',
  required: false,
  nullable: true,
})
phoneType?: PhoneType  | null;
}
