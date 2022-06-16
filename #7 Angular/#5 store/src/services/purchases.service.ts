import { Injectable } from "@angular/core";
import { Purchase } from "db/dist/entity/purchase.entity";
import { Observable } from "rxjs";
import { ApiService } from "./Api.service";

@Injectable({
  providedIn: "root"
})
export class PurchaseService{
  constructor(private service: ApiService) {
  }

  getAllPurchases(): Observable<any>{
    return this.service.getAll();
  }

  getById(id: number): Observable<Purchase>{
    return this.service.getById(`${id}`);
  }
}
