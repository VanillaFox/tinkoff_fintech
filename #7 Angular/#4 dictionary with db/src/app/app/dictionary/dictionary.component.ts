import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/services/card.service';
import { LocalStorageService } from 'src/services/localStorage.service';
import { Card } from 'src/shared/models/Card';


@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.less']
})


export class DictionaryComponent implements OnInit {
  isAdd: boolean = false;
  dictionary: Map<string, boolean> = new Map();
  constructor(public cardService: CardService, public localStotageService: LocalStorageService) { }

  ngOnInit(): void {
    for(let key of Object.keys(localStorage)){
      this.dictionary.set(key, true);
    }
    this.cardService.initialization(this.localStotageService);
  }

  toggleAdd(): void{
    this.isAdd = !this.isAdd;
  }

  openAll(): void{
    this.dictionary.clear();
    this.localStotageService.openAll();
  }

  changeOpen(index: string): void{
    this.dictionary.has(index) ? this.dictionary.delete(index) : this.dictionary.set(index, true);
    this.localStotageService.toggle(index);
  }

  deleteCard(index: string){
    this.dictionary.delete(index);
    this.cardService.deleteCard(index);
    this.localStotageService.deleteCard(index);
  }

  addCard(card: Card){
    this.cardService.addCard(card);
    this.toggleAdd();
  }
}
