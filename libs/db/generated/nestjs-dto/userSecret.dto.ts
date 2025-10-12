
import {ApiProperty} from '@nestjs/swagger'


export class UserSecretDto {
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
  nullable: true,
})
pwdHash: string  | null;
@ApiProperty({
  type: 'string',
  nullable: true,
})
salt: string  | null;
@ApiProperty({
  type: 'boolean',
  nullable: true,
})
isAdmin: boolean  | null;
}
