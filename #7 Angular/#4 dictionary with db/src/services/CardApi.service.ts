import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "src/shared/models/Card";
import { ICardServiceApi } from "./ICardServiceApi";

const host = 'http://localhost:3000/';

@Injectable()
export class CardApiService implements ICardServiceApi{
  constructor(private httpService: HttpClient){}
  getAll(): Observable<Card[]> {
    return this.httpService.get<Card[]>(host);
  }

  addCard(card: Card): Observable<Card> {
    return this.httpService.post<Card>(host, card);
  }

  deleteCard(id: string): Observable<void> {
    return this.httpService.delete<void>(host.concat(id));
  }
}
