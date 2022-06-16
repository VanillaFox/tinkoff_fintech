import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CountyService{
  private _data: any[];

  get data(): any[]{
    return this._data;
  }

  constructor() {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.ok ? res : Promise.reject(res),
          er => Promise.reject(er)
    )
    .then(
        res => res.json()
    )
    .then(res => this._data = res)
  }

}
