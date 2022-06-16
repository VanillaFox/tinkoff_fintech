import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../../shared/models/Purchase';
import { WalletService } from 'src/services/wallet.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})

export class WalletComponent implements OnInit {
  expanded = false;
  openID: number = -1;

  constructor(public purchaseSercive: WalletService){}
  ngOnInit(): void {
    this.purchaseSercive.initialization();
  }

  setFlag(event: number): void{
    this.openID = this.openID===event ? -1 : event;
  }

  addPurchase(purchase: Purchase): void {
    this.purchaseSercive.addPurs(purchase);
    this.toggle();
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  editEvent(event: Purchase): void{
    this.purchaseSercive.editPurch(event);
  }
}
