import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasketService } from 'src/services/basket.service';
import { CurrenceService } from 'src/services/currency.service';
import { Purchase } from 'src/shared/models/Purchase';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() isBasket: boolean;
  @Input() purchase: Purchase;
  @Input() count: number;
  @Output() add = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() editCount = new EventEmitter<any>();

  form: FormGroup;
  isClick: boolean;

  constructor(private currencyService: CurrenceService,
              private basketService: BasketService
    ) { }

  ngOnInit(): void {
    this.isClick = Boolean(this.basketService.myPurchases.filter((item) => item.id===this.purchase.id).length);
    let c = this.basketService.myPurchases.filter((item) => item.id===this.purchase.id)[0];
    this.form = new FormGroup({
      countInput: new FormControl(this.count ? this.count : (c ? c.count : 1)),
    })
  }

  addPurchase(): void{
    this.isClick = true;
    this.add.emit(this.purchase.id);
    this.currencyService.updateSummary()
  }

  edit(): void{
    this.basketService.edit(this.purchase.id, this.form.get('countInput')?.value);
    this.currencyService.updateSummary()
  }

  deletePurchase(): void{
    this.isClick = false;
    this.delete.emit(this.purchase.id);
    this.currencyService.updateSummary()
  }

}
