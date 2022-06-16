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
  @Input() index!: number;
  @Input() animationEnd!: boolean;
  @Output() turnAction = new EventEmitter<number>();
  @Output() deleteAction = new EventEmitter<number>();

  constructor() {}

  turn(): void {
    if(this.animationEnd){
      this.turnAction.emit(this.index);
    }
  }

  delete(): void {
    this.deleteAction.emit(this.index);
  }

  ngOnInit(): void {
  }

}

