import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService{
  constructor(private router: Router){}

  toNews(): void{
    this.router.navigate(['news']);
  }

  toStart(): void{
    this.router.navigate(['']);
  }

  toProfile(login: string): void{
    this.router.navigate([login]);
  }
}
