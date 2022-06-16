import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http'
import { ElemsModule } from './app/elems/elems.module';
import { MainPageModule } from './app/main-page/main-page.module';
import { BasketPageModule } from './app/basket-page/basket-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    AppRoutingModule,
    HttpClientModule,
    ElemsModule,
    MainPageModule,
    BasketPageModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
