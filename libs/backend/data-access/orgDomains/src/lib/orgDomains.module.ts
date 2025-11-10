import { Module } from '@nestjs/common';
import { OrgDomainsController } from './orgDomains.controller';
import { OrgDomainsService } from './orgDomains.service';

@Module({
  controllers: [OrgDomainsController],
  providers: [OrgDomainsService],
  exports: [OrgDomainsService],
})
export class OrgDomainsModule {}
