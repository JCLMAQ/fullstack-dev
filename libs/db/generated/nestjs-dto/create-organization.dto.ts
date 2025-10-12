
import {Prisma} from '../prisma'
import {ApiProperty} from '@nestjs/swagger'




export class CreateOrganizationDto {
  @ApiProperty({
  type: 'boolean',
  default: false,
  required: false,
  nullable: true,
})
published?: boolean  | null;
@ApiProperty({
  type: 'boolean',
  default: true,
  required: false,
  nullable: true,
})
isPublic?: boolean  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  default: 0,
  required: false,
  nullable: true,
})
isDeleted?: number  | null;
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
name: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
description?: string  | null;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
address?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
@ApiProperty({
  type: 'string',
})
emailITAdmin: string ;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
webSite?: string  | null;
}
