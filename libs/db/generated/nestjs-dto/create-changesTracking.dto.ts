
import {Prisma} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class CreateChangesTrackingDto {
  @ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
isDeletedDT?: Date  | null;
@ApiProperty({
  type: 'string',
})
modelName: string ;
@ApiProperty({
  type: 'string',
})
recordId: string ;
@ApiProperty({
  type: 'string',
})
operation: string ;
@ApiProperty({
  type: () => Object,
})
newData: Prisma.InputJsonValue ;
@ApiProperty({
  type: () => Object,
})
oldData: Prisma.InputJsonValue ;
}
