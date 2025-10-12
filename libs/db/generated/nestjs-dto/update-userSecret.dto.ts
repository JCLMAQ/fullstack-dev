
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUserSecretDto {
  @ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
pwdHash?: string  | null;
@ApiProperty({
  type: 'string',
  required: false,
  nullable: true,
})
salt?: string  | null;
@ApiProperty({
  type: 'boolean',
  default: false,
  required: false,
  nullable: true,
})
isAdmin?: boolean  | null;
}
