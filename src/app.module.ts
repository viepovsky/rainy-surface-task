import { Module } from '@nestjs/common';
import { RainfallModule } from './rainfall/rainfall.module';

@Module({
  imports: [RainfallModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
