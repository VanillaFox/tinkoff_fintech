import { Inject, Injectable } from "@angular/core";
import { Card } from "src/shared/models/Card";
import { CardApiServiceToken, ICardServiceApi } from "./ICardServiceApi";
import { LocalStorageService } from "./localStorage.service"

@Injectable({
  providedIn: 'root'
})
export class CardService{
  private _cards: Card[] = [];

  get cards(): Card[]{
    return this._cards;
  }

  constructor(@Inject(CardApiServiceToken) private service: ICardServiceApi){}
  initialization(service: LocalStorageService): void{
    this.service.getAll().subscribe((items) => {
      this._cards = items;
      service.revalidate(this._cards.map((elem) => elem.id));
    })
  }

  deleteCard(index: string): void{
    this.service.deleteCard(index).subscribe(() => {
      this._cards = this._cards.filter((elem) => elem.id !== index);
    });
  }

  addCard(card: Card): void{
    this.service.addCard(card).subscribe((elem) => {
      this._cards = [...this._cards, elem];
    });
  }
}
