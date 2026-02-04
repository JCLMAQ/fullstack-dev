import { Controller } from '@nestjs/common';
import { DictionariesService } from './dictionaries.service';

@Controller('dictionaries')
export class DictionariesController {
  constructor(private dictionariesService: DictionariesService) {}
}
