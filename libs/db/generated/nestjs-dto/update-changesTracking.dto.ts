
import {Prisma} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateChangesTrackingDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'string',
  required: false,
})
modelName?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
recordId?: string ;
@ApiProperty({
  type: 'string',
  required: false,
})
operation?: string ;
@ApiProperty({
  type: () => Object,
  required: false,
})
newData?: Prisma.InputJsonValue ;
@ApiProperty({
  type: () => Object,
  required: false,
})
oldData?: Prisma.InputJsonValue ;
}
