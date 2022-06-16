import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ElemsModule } from '../elems/elems.module';
import { TuiLoaderModule } from '@taiga-ui/core';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ElemsModule,
    TuiLoaderModule,
    AppRoutingModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
