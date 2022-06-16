import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryCardComponent } from './dictionary-card.component';



@NgModule({
  declarations: [
    DictionaryCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DictionaryCardComponent
  ]
})
export class DictionaryCardModule { }
