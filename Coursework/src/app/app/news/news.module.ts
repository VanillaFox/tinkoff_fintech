import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { ElemsModule } from '../elems/elems.module';
import { TuiLoaderModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    ElemsModule,
    TuiLoaderModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
