import { Injectable } from "@angular/core"
import { BasketService } from "./basket.service";
import { LocalStorageService } from "./localStorage.service";

const accesskey = 'Yf75NCCoRNno8BTsAvZwMvzreYrY0rVM'

@Injectable({
  providedIn: 'root'
})
export class CurrenceService{
  private _rate: number;
  private _summary: number;

  get summary(): number{
    return this._summary;
  }

  constructor(private basketService: BasketService,
    private localStorageService: LocalStorageService
    ){
    this._summary = 0;
    this._rate = 1;
  }

  async currencyChange(currency: string):Promise<void>{
    if(currency !== 'USD' && !localStorage.getItem(currency)){
      await fetch(`https://api.apilayer.com/fixer/convert?from=USD&to=${currency}&amount=5&date=2022-05-05&apikey=${accesskey}`)
      .then(res => res.ok ? res : Promise.reject(res),
          er => Promise.reject(er)
      )
      .then(
          res => res.json()
      )
      .then(res =>{
        this.localStorageService.setCurrency(currency, res.info.rate);
        this._rate = res.info.rate;
      })
      .catch((error) => console.log("error", error));
    }
    else{
      this._rate = currency==='USD' ? 1 : this.localStorageService.getCurrency(currency);
    }
  }

  updateSummary(): void{
    this._summary =  this._rate * this.basketService.myPurchases.reduce((count, item) => count + item.price * item.count,  0);
  }
}
