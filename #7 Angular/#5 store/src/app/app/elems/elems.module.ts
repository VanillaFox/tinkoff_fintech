import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { CardComponent } from './card/card.component';
import { TuiInputCountModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiInputCountModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    CardComponent
  ]
})
export class ElemsModule { }
