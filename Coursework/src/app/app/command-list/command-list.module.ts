import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandListComponent } from './command-list.component';
import { ElemsModule } from '../elems/elems.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiInputPasswordModule, TuiFieldErrorModule} from '@taiga-ui/kit';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';


@NgModule({
  declarations: [
    CommandListComponent,
  ],
  imports: [
    CommonModule,
    ElemsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiFieldErrorModule,
    TuiLoaderModule
  ],
  exports: [
    CommandListComponent
  ]
})
export class CommandListModule { }
