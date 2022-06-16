import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db'
import { Card } from './cards.entity';

@Controller()
export class AppController {
  constructor(private appService: InMemoryDBService<any>) {}

  @Get()
  getAll(): Card[]{
    return this.appService.getAll();
  }

  @Get(':id')
  GetProductById(@Param('id') id: string) {
    return this.appService.query(data => data.id === id)
  }

  @Post()
  create(@Body() dto: Partial<Card>): Card{
    return this.appService.create(dto);
  }

  @Post('seed')
  seed(): Card[]{
    this.appService.seed(
      (idx: number) => ({
        term: `Term ${idx+1}`,
        description: `Description ${idx+1}`,
      }), 5,
    );
    return this.appService.getAll();
  }

  @Put(':id')
  update(@Body() purchase: Card): void {
    this.appService.update(purchase);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.appService.delete(id);
  }
}
