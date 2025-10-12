
import {Prisma} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'


export class ChangesTrackingDto {
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
  type: 'boolean',
})
published: boolean ;
@ApiProperty({
  type: 'boolean',
})
isPublic: boolean ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
isDeleted: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
isDeletedDT: Date  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
doneAt: Date ;
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
newData: Prisma.JsonValue ;
@ApiProperty({
  type: () => Object,
})
oldData: Prisma.JsonValue ;
}
