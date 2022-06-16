import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElemsModule } from './app/elems/elems.module';
import { CommandListModule } from './app/command-list/command-list.module';
import { ProfileEditModule } from './app/profile-edit/profile-edit.module';
import { TeamPageModule } from './app/team-page/team-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RegPageModule } from './app/reg-page/reg-page.module';
import { AuthPageModule } from './app/auth-page/auth-page.module';
import { StartPageModule } from './app/start-page/start-page.module';
import { ProfileModule } from './app/profile/profile.module';
import { NewsModule } from './app/news/news.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TuiRootModule } from '@taiga-ui/core'
import { AppService } from 'src/services/app.service';
import { SubscriptionsModule } from './app/subscriptions/subscriptions.module';
import { FollowersModule } from './app/followers/followers.module';
import { FollowingModule } from './app/following/following.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    ElemsModule,
    CommandListModule,
    ProfileEditModule,
    TeamPageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RegPageModule,
    AuthPageModule,
    StartPageModule,
    ProfileModule,
    NewsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    TuiRootModule,
    SubscriptionsModule,
    FollowersModule,
    FollowingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
