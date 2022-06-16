import { Param, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Purchase } from './entity/purchase.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<Purchase[]> {
    return await this.appService.getAllArticles();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Purchase> {
    return await this.appService.getById(`${id}`);
  }
}
