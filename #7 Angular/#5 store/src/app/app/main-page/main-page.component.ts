import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/services/basket.service';
import { PurchaseService } from 'src/services/purchases.service';
import { Purchase } from 'src/shared/models/Purchase';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  purchasesList: Observable<Purchase[] | undefined>;

  constructor(private purchasesService: PurchaseService,
              private basketService: BasketService) { }

  ngOnInit(): void {
    this.purchasesList = this.purchasesService.getAllPurchases();
  }

  add(id: number): void{
    this.basketService.add(id);
  }
}
