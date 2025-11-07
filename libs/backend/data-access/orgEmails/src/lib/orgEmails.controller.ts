import { Controller } from '@nestjs/common';
import { OrgEmailsService } from './orgEmails.service';

@Controller('orgEmails')
export class OrgEmailsController {
  constructor(private orgEmailsService: OrgEmailsService) {}
}
