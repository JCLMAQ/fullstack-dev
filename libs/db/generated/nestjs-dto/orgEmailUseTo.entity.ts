
import {ApiProperty} from '@nestjs/swagger'
import {OrgEmailEntity} from './orgEmail.entity'


export class OrgEmailUseToEntity {
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
useTo: string ;
@ApiProperty({
  type: 'boolean',
})
isActiv: boolean ;
@ApiProperty({
  type: () => OrgEmailEntity,
  required: false,
})
emailOrg?: OrgEmailEntity ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
emailOrgId: number ;
}
