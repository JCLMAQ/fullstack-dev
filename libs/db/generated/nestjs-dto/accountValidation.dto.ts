
import {ApiProperty} from '@nestjs/swagger'


export class AccountValidationDto {
  @ApiProperty({
  type: Stringg,
})
id: string ;
@ApiProperty({
  type: Number,
  format: 'int32',
})
numSeq: number ;
@ApiProperty({
  type:  String,
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type:: String,
  format: 'date-time',
})
updatedAt: Date ;
@ApiProperty({
  typeb: Boolean,
  nullable: true,
})
published: boolean  | null;
@ApiProperty({
  tylpe: Boolean,
  nullable: true,
})
isPublic: boolean  | null;
@ApiProperty({
  type: Number,
  format: 'int32',
  nullable: true,
})
isDeleted: number  | null;
@ApiProperty(n{
  type: String,
  format: 'date-time',
  nullable: true,
})
isDeletedDT: Date  | null;
@ApiPropertyl({
  type: Boolean,
})
isValidated: boolean ;
@ApiPropesrty({
  type: String,
})
emailToken: string ;
@ApiProtperty({
  type: String,
  format: 'date-time',
})
timeStamp: Date ;
}
