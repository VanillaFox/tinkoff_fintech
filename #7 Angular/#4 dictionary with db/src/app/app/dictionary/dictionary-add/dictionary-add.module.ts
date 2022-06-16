import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryAddComponent } from './dictionary-add.component';
import {TuiTextAreaModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DictionaryAddComponent,
  ],
  imports: [
    CommonModule,
    TuiTextAreaModule,
    TuiButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    DictionaryAddComponent,
  ]
})
export class DictionaryAddModule { }
