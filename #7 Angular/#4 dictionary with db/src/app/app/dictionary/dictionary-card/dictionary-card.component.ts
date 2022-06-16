import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/shared/models/Card';

@Component({
  selector: 'app-dictionary-card',
  templateUrl: './dictionary-card.component.html',
  styleUrls: ['./dictionary-card.component.less']
})
export class DictionaryCardComponent implements OnInit {
  @Input() isOpen!: boolean;
  @Input() card!: Card;
  @Output() turnAction = new EventEmitter<string>();
  @Output() deleteAction = new EventEmitter<string>();
  animationEnd: boolean = true;
  isDelete: boolean = false;
  constructor() {}

  turn(): void {
    if(this.animationEnd && !this.isDelete){
      this.animationEnd = false;
      setTimeout(() => this.animationEnd = true, 800);
      this.turnAction.emit(this.card.id);
    }
  }

  delete(): void {
    this.isDelete = true;
    this.deleteAction.emit(this.card.id);
  }

  ngOnInit(): void {
  }

}

