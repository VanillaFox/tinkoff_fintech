import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElemsModule } from '../elems/elems.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiInputPasswordModule, TuiFieldErrorModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { RegPageComponent } from './reg-page.component';


@NgModule({
  declarations: [
    RegPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ElemsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiErrorModule,
    TuiFieldErrorModule,
  ],
  exports: [
    RegPageComponent
  ]
})
export class RegPageModule { }
