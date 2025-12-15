import { DbConfigModule } from '@be/db-config';
import { PrismaClientModule } from '@db/prisma-client';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';

@Global()
@Module({
  imports: [
    PrismaClientModule,
    DbConfigModule,
    ConfigModule
  ],
  controllers: [MailsController],
  providers: [MailsService],
  exports: [MailsService],
})
export class MailsModule {}
