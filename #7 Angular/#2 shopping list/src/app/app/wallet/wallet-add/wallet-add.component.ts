import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Date, Purchase} from '../../../../shared/models/Purchase';
import {isValidName, isValidCost, isFillInput} from 'src/shared/models/checkInput';
import { TuiDay } from '@taiga-ui/cdk';

function setDate(date: Date): TuiDay{
  let {year, month, day} = date;
  return new TuiDay(year, month, day);
}

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent {
  commenText: string;
  form: FormGroup;
  @Input() editPurchase: Purchase;
  @Input() isEdit: boolean;
  @Output() add = new EventEmitter<Purchase>();

  ngOnInit(): void {
    this.form = new FormGroup({
      nameInput: new FormControl(this.isEdit ? this.editPurchase.title : null, [isValidName, isFillInput]),
      costInput: new FormControl(this.isEdit ? this.editPurchase.price : null, [isValidCost, isFillInput]),
      dateInput: new FormControl(this.isEdit ? setDate(this.editPurchase.date) : TuiDay.currentLocal()),
      commentInput: new FormControl(this.isEdit ? this.editPurchase?.comment : undefined),
    });
    this.commenText = this.isEdit && this.editPurchase?.comment ? this.editPurchase.comment : '';
  }

  submit(): void {
    let elem: Purchase = {
      title: this.form.get('nameInput')?.value,
      price: Number(this.form.get('costInput')?.value),
      date: {
        day: this.form.get('dateInput')?.value.day,
        month: this.form.get('dateInput')?.value.month,
        year: this.form.get('dateInput')?.value.year
      },
      comment: this.form.get('commentInput')?.value
    };

    if(this.isEdit){
      elem.id = this.editPurchase.id;
    }

    this.add.emit(elem);
    this.form.reset();
  }
}
