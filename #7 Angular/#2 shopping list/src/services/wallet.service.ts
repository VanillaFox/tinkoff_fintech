import { Inject, Injectable } from "@angular/core";
import { Purchase } from "src/shared/models/Purchase";
import { IWalletApiService, WalletApiServiceToken } from "./IWalletApiService";

@Injectable({
  providedIn: 'root'
})

export class WalletService {
  private _purchases: Purchase[] = [];
  private _summary: number = 0;

  constructor(@Inject(WalletApiServiceToken) private service: IWalletApiService){
  }

  get summary(): number{
    return this._summary;
  }

  get purchases(): Purchase[]{
    return this._purchases;
  }

  initialization(): void{
    this.service.getAll().subscribe((items) => {
      this._purchases = items;
      this.updateSummary();
    });
  }

  addPurs(purcase: Purchase){
    this.service.addPurhase(purcase).subscribe(() =>{
      this._purchases = [...this._purchases, purcase];
      this.updateSummary();
    });
  }

  editPurch(purcase: Purchase){
    this.service.editPurchase(purcase).subscribe();
  }

  updateSummary(): void {
    this._summary = this._purchases.reduce((sum, p) => p.price + sum, 0);
  }
}

