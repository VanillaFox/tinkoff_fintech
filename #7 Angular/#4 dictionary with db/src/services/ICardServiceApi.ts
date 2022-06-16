import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "src/shared/models/Card";

export const CardApiServiceToken = new InjectionToken<ICardServiceApi>('ICardServiceApi');

export interface ICardServiceApi{
  getAll(): Observable<Card[]>;
  addCard(card: Card): Observable<Card>;
  deleteCard(id: string): Observable<void>;
}
