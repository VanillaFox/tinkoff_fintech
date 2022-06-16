import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageGridComponent } from './page-grid/page-grid.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TeammateItemComponent } from './teammate-item/teammate-item.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CreatePostComponent } from './header/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiInputPasswordModule, TuiTextAreaModule, TuiFieldErrorModule } from '@taiga-ui/kit';
import { TuiDropdownModule } from '@taiga-ui/core';
import { TimeagoModule } from 'ngx-timeago';
import { CommentComponent } from './comment/comment.component';
import { TuiLoaderModule } from '@taiga-ui/core';
import { RegTeamFormComponent } from './header/reg-team-form/reg-team-form.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LocationInfoComponent,
    NavigationComponent,
    PageGridComponent,
    TeamCardComponent,
    TeammateItemComponent,
    PostComponent,
    CreatePostComponent,
    CommentComponent,
    RegTeamFormComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiFieldErrorModule,
    TuiDropdownModule,
    TimeagoModule.forRoot(),
    TuiLoaderModule,
    TuiInputModule,
    TuiInputPasswordModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LocationInfoComponent,
    NavigationComponent,
    PageGridComponent,
    TeamCardComponent,
    TeammateItemComponent,
    PostComponent,
    RegTeamFormComponent,
    UserCardComponent
  ],
  providers: [
  ]
})
export class ElemsModule { }
