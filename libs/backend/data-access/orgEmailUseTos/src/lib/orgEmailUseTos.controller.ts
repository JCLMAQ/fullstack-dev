import { Controller } from '@nestjs/common';
import { OrgEmailUseTosService } from './orgEmailUseTos.service';

@Controller('orgEmailUseTos')
export class OrgEmailUseTosController {
  constructor(private orgEmailUseTosService: OrgEmailUseTosService) {}
}
