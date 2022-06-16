import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageComponent } from './basket-page.component';
import { ElemsModule } from '../elems/elems.module';
import { TuiLabelModule } from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiFieldErrorModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    BasketPageComponent
  ],
  imports: [
    CommonModule,
    ElemsModule,
    TuiLabelModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiFieldErrorModule
  ],
  exports: [
    BasketPageComponent
  ]
})
export class BasketPageModule { }
