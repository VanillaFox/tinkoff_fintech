import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { TuiDay } from '@taiga-ui/cdk';
import { PurchaseEntity } from './purchases.entity';
import {InMemoryDBService} from '@nestjs-addons/in-memory-db'

@Controller()
export class AppController {
  constructor(private appService: InMemoryDBService<any>) {}

  @Get()
  getAll(): PurchaseEntity[]{
    return this.appService.getAll();
  }

  @Get(':id')
  GetProductById(@Param('id') id: number) {
    return this.appService.query(data => data.id === +id)
  }

  @Post()
  create(@Body() dto: Partial<PurchaseEntity>): PurchaseEntity{
    return this.appService.create(dto);
  }

  @Post('seed')
  seed(): PurchaseEntity[]{
    this.appService.seed(
      (idx: number) => ({
        title: `Purchase ${idx+1}`,
        price: (idx+1)*20,
        date: {
          day: TuiDay.currentLocal().day,
          month: TuiDay.currentLocal().month,
          year: TuiDay.currentLocal().year,
        },
      }), 5,
    );
    return this.appService.getAll();
  }

  @Put(':id')
  update(@Body() purchase: PurchaseEntity) {
    this.appService.update(purchase);
  }
}
