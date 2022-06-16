import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Purchase } from "src/shared/models/Purchase";
import { IWalletApiService } from "./IWalletApiService";

const host = 'http://tfs/';

@Injectable()
export class WalletApiService implements IWalletApiService{
  constructor(private httpService: HttpClient){}

  getAll(): Observable<Purchase[]> {
    return this.httpService.get<Purchase[]>(host);
  }

  addPurhase(purchase: Purchase): Observable<void> {
    return this.httpService.post<void>(host, purchase);
  }

  editPurchase(purcase: Purchase): Observable<void> {
    return this.httpService.put<void>(host.concat(String(purcase.id)), purcase);
  }
}
