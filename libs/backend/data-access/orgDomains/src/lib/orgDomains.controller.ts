import { Controller } from '@nestjs/common';
import { OrgDomainsService } from './orgDomains.service';

@Controller('orgDomains')
export class OrgDomainsController {
  constructor(private orgDomainsService: OrgDomainsService) {}
}
