import { Module } from '@nestjs/common';
import { AppEmailDomainsController } from './appEmailDomains.controller';
import { AppEmailDomainsService } from './appEmailDomains.service';

@Module({
  controllers: [AppEmailDomainsController],
  providers: [AppEmailDomainsService],
  exports: [AppEmailDomainsService],
})
export class AppEmailDomainsModule {}
