import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseService } from 'src/services/purchases.service';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { CurrenceService } from 'src/services/currency.service';
import { BasketService } from 'src/services/basket.service';
import { CountyService } from 'src/services/county.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Must be filled in",
        email: "Invalid mail format"
      }
    }
  ]
})
export class BasketPageComponent implements OnInit {
  data: any[];
  form: FormGroup;
  lastForm: any;

  constructor(public purchasesService: PurchaseService,
    public basketService: BasketService,
    public currencyService: CurrenceService,
    public countryService: CountyService) { }

  ngOnInit(): void {
    this.lastForm = JSON.parse(`${localStorage.getItem('form')}`)
    this.form = new FormGroup({
      countryInput: new FormControl(null, Validators.required),
      cityInput: new FormControl(this.lastForm ? this.lastForm.cityInput: null, Validators.required),
      streetInput: new FormControl(this.lastForm ? this.lastForm.streetInput: null, Validators.required),
      houseInput: new FormControl(this.lastForm ? this.lastForm.houseInput: null, Validators.required),
      nameInput: new FormControl(this.lastForm ? this.lastForm.nameInput: null, Validators.required),
      emailInput: new FormControl(this.lastForm ? this.lastForm.emailInput: null, [Validators.required, Validators.email]),
    })
    this.currencyService.currencyChange(this.lastForm ? this.lastForm.currency : 'USD');
    this.currencyService.updateSummary();
  }

  delete(id: number): void{
    this.basketService.delete(id);
  }

  setCounty(){
    let t = document.getElementById('country') as HTMLSelectElement;
    let c = document.getElementById('currencies') as HTMLSelectElement;
    c.selectedIndex = t.selectedIndex;
    this.currenceChanges();
  }

  async currenceChanges(): Promise<void>{
    let c = document.getElementById('currencies') as HTMLSelectElement;
    await this.currencyService.currencyChange(c.value);
    this.currencyService.updateSummary();
  }

  sendForm(){
    if(!this.form.valid){
      this.form.markAllAsTouched();
    }
    else{
      let c = document.getElementById('currencies') as HTMLSelectElement;
      localStorage.setItem("form", JSON.stringify({...this.form.value, currency: c.value}))
    }
  }
}
