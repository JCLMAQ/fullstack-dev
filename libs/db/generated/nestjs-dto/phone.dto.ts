
import {PhoneType} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'


export class PhoneDto {
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
  type: 'string',
})
countryCode: string ;
@ApiProperty({
  type: 'string',
})
number: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
extension: string  | null;
@ApiProperty({
  enum: PhoneType,
  enumName: 'PhoneType',
  nullable: true,
})
phoneType: PhoneType  | null;
@ApiProperty({
  type: 'boolean',
})
isPrimary: boolean ;
}
