export interface Purchase {
  title: string;
  price: number;
  date: Date;
  id?: number;
  comment?: string;
}

export interface Date{
  day: number;
  month: number;
  year: number;
}
