
import {AddressType} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'


export class AddressEntity {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
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
  type: () => UserEntity,
  required: false,
})
user?: UserEntity ;
@ApiProperty({
  type: 'string',
})
userId: string ;
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
  nullable: true,
})
addressType: AddressType  | null;
@ApiProperty({
  type: 'boolean',
})
isPrimary: boolean ;
}
