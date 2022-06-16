import { Component, OnInit } from '@angular/core';
import { Card } from 'src/shared/models/Card';

const data: Card[] =[
  {
    term: "7 этаж",
    description: "Это как 6, но на этаж выше",
  },
  {
    term: "Паркур",
    description: "Новое движение",
  },
  {
    description: "Уникальная способность запоминать изображения, звуки, информацию до мельчайших деталей",
    term: "Эйдетическая память",
  },
  {
    term: "Mimblewimble",
    description: "PoW-протокол с возможностями широкого масштабирования и повышенной приватности.",
  },
  {
    term: "Виртуальная память",
    description: "Метод управления памятью компьютера, позволяющий выполнять программы, требующие больше оперативной памяти, чем имеется в компьютере, путём автоматического перемещения частей программы между основной памятью и вторичным хранилищем",
  }
];


@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.less']
})


export class DictionaryComponent implements OnInit {
  cards: Card[] = [];
  isAdd: boolean = false;
  animationEnd: boolean = true;
  turnedID: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.cards = data;
  }

  toggleAdd(): void{
    this.isAdd = !this.isAdd;
  }

  changeOpen(index: number): void{
    this.turnedID = this.turnedID===index ? -1 : index;
    this.animationEnd = !this.animationEnd;
    setTimeout(() => this.animationEnd = !this.animationEnd, 800);
  }

  deleteCard(index: number){
    if(index === this.turnedID){
      this.turnedID = -1;
    }
    else if(this.turnedID > index){
      this.turnedID--;
    }
    this.cards.splice(index, 1);
    this.cards = Array.from(this.cards);
  }

  addCard(event: Card){
    this.cards = [...this.cards, event];
    this.toggleAdd();
  }
}
