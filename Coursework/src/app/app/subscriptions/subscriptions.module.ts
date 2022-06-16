import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
import { ElemsModule } from '../elems/elems.module';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    SubscriptionsComponent
  ],
  imports: [
    CommonModule,
    ElemsModule,
    TuiButtonModule,
    TuiLoaderModule,
    AppRoutingModule
  ],
  exports: [
    SubscriptionsComponent
  ]
})
export class SubscriptionsModule { }
