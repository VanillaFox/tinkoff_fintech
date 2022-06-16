import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { NavigationService } from 'src/services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(private routerService: NavigationService, private service: AppService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if((state.url === '/' || state.url === '/reg' || state.url === '/auth') && localStorage.getItem('userId')){
      this.routerService.toNews();
      return false;
    }
    if(state.url !== '/' &&  state.url !== '/auth' && state.url !== '/reg' && !localStorage.getItem('userId')){
      this.routerService.toStart();
      return false;
    }
    if(route.params['login']){
      window.scrollTo(0, 0);
      this.service.setLogin(route.params['login']);
      return true;
    }
    if(route.params['id']){
      window.scrollTo(0, 0);
      this.service.setTeamLogin(route.params['id']);
    }
    return true;
  }
}
