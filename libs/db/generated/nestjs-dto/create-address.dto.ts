
import {AddressType} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class CreateAddressDto {
  @ApiProperty({
  type: 'string',
})
street: string ;
@ApiProperty({
  type: 'string',
})
city: string ;
@ApiProperty({
  type: 'string',
})
state: string ;
@ApiProperty({
  type: 'string',
})
zipCode: string ;
@ApiProperty({
  type: 'string',
})
country: string ;
@ApiProperty({
  enum: AddressType,
  enumName: 'AddressType',
  default: 'Home',
  required: false,
  nullable: true,
})
addressType?: AddressType  | null;
}
