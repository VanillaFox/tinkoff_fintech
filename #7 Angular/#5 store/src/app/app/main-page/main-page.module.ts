import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ElemsModule } from '../elems/elems.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    ElemsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
