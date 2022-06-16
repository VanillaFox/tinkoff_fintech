import { Component } from '@angular/core';
import { Purchase } from 'src/shared/models/Purchase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  userData: Purchase = {
    email: '',
    pwd: ''
  };

  getParams(event: Purchase): void{
    this.userData = event;
  }
}
