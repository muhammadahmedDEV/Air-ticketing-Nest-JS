import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DuffelModule } from './duffel/duffel.module';

@Module({
  imports: [ConfigModule.forRoot(), DuffelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
