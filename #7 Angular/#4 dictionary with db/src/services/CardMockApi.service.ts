import { Observable, of } from "rxjs";
import { Card } from "src/shared/models/Card";
import { ICardServiceApi } from "./ICardServiceApi";

export class CardMockApiService implements ICardServiceApi{
  data: Card[] =[
    {
      term: "7 этаж",
      description: "Это как 6, но на этаж выше",
      id: '1',
    },
    {
      term: "Паркур",
      description: "Новое движение",
      id: '2',
    },
    {
      description: "Уникальная способность запоминать изображения, звуки, информацию до мельчайших деталей",
      term: "Эйдетическая память",
      id: '3',
    },
    {
      term: "Mimblewimble",
      description: "PoW-протокол с возможностями широкого масштабирования и повышенной приватности.",
      id: '4',
    },
    {
      term: "Виртуальная память",
      description: "Метод управления памятью компьютера, позволяющий выполнять программы, требующие больше оперативной памяти, чем имеется в компьютере, путём автоматического перемещения частей программы между основной памятью и вторичным хранилищем",
      id: '5',
    }
  ];
  getAll(): Observable<Card[]> {
    return of(this.data);
  }

  addCard(card: Card): Observable<Card> {
    this.data = [...this.data, card];
    return of(card);
  }

  deleteCard(id: string): Observable<void> {
    this.data = this.data.filter((elem) => elem.id !== id);
    return of(void 0);
  }
}
