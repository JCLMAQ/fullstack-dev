
import {AddressType} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateAddressDto {
  @ApiProperty({
  type: 'string',
  required: false,
})
street?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
city?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
state?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
zipCode?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
country?: string ;
@ApiProperty({
  enum: AddressType,
  enumName: 'AddressType',
  default: 'Home',
  required: false,
  nullable: true,
})
addressType?: AddressType  | null;
}
