import { Controller } from '@nestjs/common';
import { ConfigParamsService } from './configParams.service';

@Controller('configParams')
export class ConfigParamsController {
  constructor(private configParamsService: ConfigParamsService) {}
}
