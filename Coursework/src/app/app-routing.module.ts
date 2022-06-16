import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppGuard } from './app.guard';
import { AuthPageComponent } from './app/auth-page/auth-page.component';
import { CommandListComponent } from './app/command-list/command-list.component';
import { FollowersComponent } from './app/followers/followers.component';
import { FollowingComponent } from './app/following/following.component';
import { NewsComponent } from './app/news/news.component';
import { ProfileEditComponent } from './app/profile-edit/profile-edit.component';
import { ProfileComponent } from './app/profile/profile.component';
import { RegPageComponent } from './app/reg-page/reg-page.component';
import { StartPageComponent } from './app/start-page/start-page.component';
import { SubscriptionsComponent } from './app/subscriptions/subscriptions.component';
import { TeamPageComponent } from './app/team-page/team-page.component';


const routes: Routes = [
  {path: '', component: StartPageComponent, canActivate: [AppGuard]},
  {path: 'auth', component: AuthPageComponent, canActivate: [AppGuard]},
  {path: 'news', component: NewsComponent, canActivate: [AppGuard]},
  {path: 'commands', component: CommandListComponent, canActivate: [AppGuard]},
  {path: 'reg', component: RegPageComponent, canActivate: [AppGuard]},
  {path: 'edit',  component: ProfileEditComponent, canActivate: [AppGuard]},
  {path: 'subscriptions',  component: SubscriptionsComponent, canActivate: [AppGuard]},
  {path: 'followers/:user',  component: FollowersComponent, canActivate: [AppGuard]},
  {path: 'following/:user',  component: FollowingComponent, canActivate: [AppGuard]},
  {path: ':login',  component: ProfileComponent, canActivate: [AppGuard]},
  {path: 'team/:id',  component: TeamPageComponent, canActivate: [AppGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AppGuard]
})

export class AppRoutingModule {
  constructor(private router: Router){
    this.router.onSameUrlNavigation = 'reload';
  }
 }
