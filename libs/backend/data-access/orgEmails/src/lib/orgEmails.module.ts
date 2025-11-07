import { Module } from '@nestjs/common';
import { OrgEmailsController } from './orgEmails.controller';
import { OrgEmailsService } from './orgEmails.service';

@Module({
  controllers: [OrgEmailsController],
  providers: [OrgEmailsService],
  exports: [OrgEmailsService],
})
export class OrgEmailsModule {}
