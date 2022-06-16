import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-edit.component';
import { ElemsModule } from '../elems/elems.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule,
        TuiInputNumberModule,
        TuiInputTagModule,
        TuiTextAreaModule,
        TuiDataListWrapperModule,
        TuiSelectModule
      } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDataListModule } from '@taiga-ui/core';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    ProfileEditComponent
  ],
  imports: [
    CommonModule,
    ElemsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiInputNumberModule,
    TuiInputTagModule,
    TuiTextAreaModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    FormsModule,
    TuiSelectModule,
    AppRoutingModule
  ],
  exports: [
    ProfileEditComponent
  ],
})
export class ProfileEditModule { }
