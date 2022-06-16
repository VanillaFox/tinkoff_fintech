export class PurchaseEntity{
  title: string;
  price: number;
  date: Date;
  id: number;
  comment: string;
}


interface Date{
  day: number;
  month: number;
  year: number;
}
