import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  TuiRootModule,
} from '@taiga-ui/core';
import {WalletModule} from './app/wallet/wallet.module';
import { WalletApiServiceToken } from 'src/services/IWalletApiService';
import { ApiInterceptor } from '../services/api.interceptor'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { WalletApiService } from 'src/services/WalletApi.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    WalletModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    {provide: WalletApiServiceToken, useClass: WalletApiService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
