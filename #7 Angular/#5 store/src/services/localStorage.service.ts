import { Injectable } from "@angular/core";
import { InBasket } from "src/shared/models/Purchase";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService{
  setPurchases(purchases: InBasket[]): void {
    localStorage.setItem('myPurchases', JSON.stringify(purchases));
  }

  getPurchases(): any {
    return JSON.parse(`${localStorage.getItem('myPurchases')}`);
  }

  setForm(form: any): void {
    localStorage.setItem("form",  JSON.stringify(form));
  }

  getCurrency(currency: string): number {
    return +`${localStorage.getItem(currency)}`;
  }

  setCurrency(currency: string, rate: number): void{
    localStorage.setItem(currency,  JSON.stringify(rate));
  }
}
