import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Purchase} from '../../../../shared/models/Purchase';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent {
  isEdit: boolean = false;
  @Input() purchase!: Purchase;
  @Input() index!: number;
  @Input() isOpen!: boolean;
  @Output() toggleFlag = new EventEmitter<number>();
  @Output() editPurchase = new EventEmitter<Purchase>();

  toggleOpen(): void {
    this.toggleFlag.emit(this.index);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  get formattedDate(): string{
    return `${this.purchase.date.day}/${this.purchase.date.month+1}/${this.purchase.date.year}`;
  }

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  editPurch(event: Purchase){
    this.toggleEdit();
    this.purchase = {...event};
    this.editPurchase.emit(this.purchase);
  }
}
