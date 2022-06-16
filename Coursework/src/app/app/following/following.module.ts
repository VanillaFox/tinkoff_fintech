import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowingComponent } from './following.component';
import { ElemsModule } from '../elems/elems.module';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    FollowingComponent
  ],
  imports: [
    CommonModule,
    ElemsModule,
    TuiButtonModule,
    TuiLoaderModule,
    AppRoutingModule
  ],
  exports: [
    FollowingComponent
  ]
})
export class FollowingModule { }
