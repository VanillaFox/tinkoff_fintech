import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowersComponent } from './followers.component';
import { ElemsModule } from '../elems/elems.module';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FollowersComponent
  ],
  imports: [
    CommonModule,
    ElemsModule,
    TuiButtonModule,
    TuiLoaderModule,
    AppRoutingModule
  ],
  exports: [
    FollowersComponent
  ]
})
export class FollowersModule { }
