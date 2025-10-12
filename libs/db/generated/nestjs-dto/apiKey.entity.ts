
import {ApiProperty} from '@nestjs/swagger'
import {UserEntity} from './user.entity'
import {ScopeEntity} from './scope.entity'


export class ApiKeyEntity {
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
key: string ;
@ApiProperty({
  type: 'string',
})
uuid: string ;
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
  type: () => ScopeEntity,
  isArray: true,
  required: false,
})
Scopes?: ScopeEntity[] ;
}
