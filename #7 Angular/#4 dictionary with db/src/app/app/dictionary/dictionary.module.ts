import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';
import { DictionaryComponent } from './dictionary.component';
import { DictionaryCardModule } from './dictionary-card/dictionary-card.module';
import { DictionaryAddModule } from './dictionary-add/dictionary-add.module';
import { CardApiServiceToken } from 'src/services/ICardServiceApi';
import { CardMockApiService } from 'src/services/CardMockApi.service';
import { HttpClientModule } from '@angular/common/http'
import { CardApiService } from 'src/services/CardApi.service';

@NgModule({
  declarations: [
    DictionaryComponent,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    DictionaryCardModule,
    DictionaryAddModule,
    HttpClientModule,
  ],
  exports: [
    DictionaryComponent,
  ],
  providers: [
    {provide: CardApiServiceToken, useClass: CardApiService}
    // {provide: CardApiServiceToken, useClass: CardMockApiService}

  ],
})

export class DictionaryModule { }
