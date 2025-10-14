import { Controller } from '@nestjs/common';
import { AppEmailDomainsService } from './appEmailDomains.service';

@Controller('appEmailDomains')
export class AppEmailDomainsController {
  constructor(private appEmailDomainsService: AppEmailDomainsService) {}
}
