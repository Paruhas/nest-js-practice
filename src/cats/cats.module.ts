import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class CatsModule {}
