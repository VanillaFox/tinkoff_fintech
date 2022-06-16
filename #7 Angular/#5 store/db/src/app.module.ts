import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entity/purchase.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      Purchase
  ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
