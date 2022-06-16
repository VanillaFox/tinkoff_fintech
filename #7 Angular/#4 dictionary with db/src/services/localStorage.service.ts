import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  deleteCard(index: string): void{
    localStorage.removeItem(index);
  }

  revalidate(ids: string[]): void{
    const keys = Object.keys(localStorage);
    localStorage.clear();
    for(let i = 0; i < ids.length; i++){
      let index = keys.indexOf(ids[i]);
      if(index !== -1){
        localStorage.setItem(keys[index], 'true');
      }
    }
  }

  toggle(index: string): void{
    localStorage[index] === 'true' ? localStorage.removeItem(index) : localStorage.setItem(index, 'true');
  }


  openAll(): void{
    localStorage.clear();
  }
}
