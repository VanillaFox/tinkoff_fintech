import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './app/form/form.component';
import {TuiInputModule, TuiFieldErrorModule,
  TuiCheckboxModule, TuiCheckboxLabeledModule, TuiInputPasswordModule
  } from '@taiga-ui/kit';
import {TuiButtonModule, TuiTextfieldControllerModule, TuiErrorModule} from '@taiga-ui/core';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    // FormModule,
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    AppRoutingModule,
    TuiCheckboxModule,
    TuiInputModule,
    TuiFieldErrorModule,
    CommonModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiCheckboxLabeledModule,
    TuiButtonModule,
    TuiErrorModule,
    TuiInputPasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
