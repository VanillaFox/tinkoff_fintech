import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import {TuiBadgeModule, TuiInputModule, TuiFieldErrorModule,
TuiInputDateModule, TuiTextAreaModule
} from '@taiga-ui/kit';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {PipesModule} from './pipes/pipes.module'

@NgModule({
  declarations: [
    WalletComponent,
    WalletItemComponent,
    WalletAddComponent,
  ],
  exports: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiFieldErrorModule,
    TuiInputDateModule,
    TuiTextAreaModule,
    PipesModule
  ]
})
export class WalletModule { }
