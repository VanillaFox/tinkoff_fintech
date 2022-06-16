import { InBasket } from "src/shared/models/Purchase";
import { PurchaseService } from "./purchases.service";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "./localStorage.service";

@Injectable({
  providedIn: "root"
})
export class BasketService{
  private _myPurchases: InBasket[] = [];

  constructor(private purchasesService: PurchaseService,
              private localStorageService: LocalStorageService){
    this._myPurchases = this.localStorageService.getPurchases();
    if(this._myPurchases === null){
      this._myPurchases = [];
    }
  }

  get myPurchases(): InBasket[]{
    return this._myPurchases;
  }

  delete(id: number): void{
    this._myPurchases = [...this._myPurchases.filter((item) => item.id!==id)];
    this.localStorageService.setPurchases(this._myPurchases);
  }


  add(id: number): void{
    this.purchasesService.getById(id).subscribe((item) => {
      let c = true;
      this._myPurchases.forEach((item) => {
        if(item.id===id){
          item.count += 1;
          c = false;
        }
      })
      if(!this._myPurchases.length || c){
        this._myPurchases = [...this._myPurchases, {count: 1, ...item as any}]
      }
      else{
        this._myPurchases = [...this._myPurchases]
      }
      this.localStorageService.setPurchases(this._myPurchases);
    })
  }


  edit(id: number, count: string): void{
    this._myPurchases = [...this._myPurchases.map(item => {
      if(item.id===id){
        item.count = +count;
      }
      return item;
    })]
    this.localStorageService.setPurchases(this._myPurchases);
  }
}
