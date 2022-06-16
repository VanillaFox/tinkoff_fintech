import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Purchase } from "db/dist/entity/purchase.entity";
import { Observable } from "rxjs";

const host = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  constructor(private http: HttpClient) {}

  getAll(): Observable<Purchase[]>{
    return this.http.get<Purchase[]>(`${host}`);
  }

  getById(id: string): Observable<Purchase>{
    return this.http.get<Purchase>(`${host}${id}`);
  }
}
