import { Injectable } from '@nestjs/common';
import { Purchase } from './entity/purchase.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Purchase) private readonly articleRepo: Repository<Purchase>
  ) {}

  async getAllArticles(): Promise<Purchase[]> {
    return await this.articleRepo.find();
  }

  async getById(id: string): Promise<Purchase> {
    return await this.articleRepo.findOne(id);
  }
}
