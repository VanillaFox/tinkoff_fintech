import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardFormatPipe, ConvertCasePipe} from './format.pipes'

@NgModule({
  declarations: [
    CardFormatPipe,
    ConvertCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardFormatPipe,
    ConvertCasePipe
  ]
})
export class PipesModule { }
