import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StartPageComponent
  ]
})
export class StartPageModule { }
