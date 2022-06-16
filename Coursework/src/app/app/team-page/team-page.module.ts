import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './team-page.component';
import { ElemsModule } from '../elems/elems.module';
import { TuiButtonModule } from '@taiga-ui/core';



@NgModule({
  declarations: [
    TeamPageComponent,
  ],
  imports: [
    CommonModule,
    ElemsModule,
    TuiButtonModule,
  ],
  exports: [
    TeamPageComponent,
  ]
})
export class TeamPageModule { }
