import { Module } from '@nestjs/common';
import { OrgEmailUseTosController } from './orgEmailUseTos.controller';
import { OrgEmailUseTosService } from './orgEmailUseTos.service';

@Module({
  controllers: [OrgEmailUseTosController],
  providers: [OrgEmailUseTosService],
  exports: [OrgEmailUseTosService],
})
export class OrgEmailUseTosModule {}
