import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';
import { DictionaryComponent } from './dictionary.component';
import { DictionaryCardModule } from './dictionary-card/dictionary-card.module';
import { DictionaryAddModule } from './dictionary-add/dictionary-add.module';


@NgModule({
  declarations: [
    DictionaryComponent,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    DictionaryCardModule,
    DictionaryAddModule
  ],
  exports: [
    DictionaryComponent,
  ]
})

export class DictionaryModule { }
