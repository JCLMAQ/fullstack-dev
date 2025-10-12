
import {ApiProperty} from '@nestjs/swagger'
import {OrganizationEntity} from './organization.entity'
import {OrgEmailUseToEntity} from './orgEmailUseTo.entity'


export class OrgEmailEntity {
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
})
email: string ;
@ApiProperty({
  type: 'string',
  nullable: true,
})
description: string  | null;
@ApiProperty({
  type: () => OrganizationEntity,
  required: false,
  nullable: true,
})
org?: OrganizationEntity  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
orgId: string  | null;
@ApiProperty({
  type: () => OrgEmailUseToEntity,
  isArray: true,
  required: false,
})
OrgEmailUseTos?: OrgEmailUseToEntity[] ;
}
