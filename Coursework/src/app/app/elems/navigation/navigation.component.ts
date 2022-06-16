import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  userLogin: Observable<any>;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.userLogin = this.service.idToLogin(`${localStorage.getItem('userId')}`)
  }
}
