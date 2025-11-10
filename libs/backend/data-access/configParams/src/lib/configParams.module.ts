import { Module } from '@nestjs/common';
import { ConfigParamsController } from './configParams.controller';
import { ConfigParamsService } from './configParams.service';

@Module({
  controllers: [ConfigParamsController],
  providers: [ConfigParamsService],
  exports: [ConfigParamsService],
})
export class ConfigParamsModule {}
