import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Purchase } from "src/shared/models/Purchase";

export const WalletApiServiceToken = new InjectionToken<IWalletApiService>('IWalletApiService');

export interface IWalletApiService{
  getAll(): Observable<Purchase[]>;
  addPurhase(purchase: Purchase): Observable<void>;
  editPurchase(purcase: Purchase): Observable<void>;
}
