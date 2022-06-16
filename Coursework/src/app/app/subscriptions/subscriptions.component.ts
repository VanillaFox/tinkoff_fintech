import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { UserData } from 'src/shared/IDate';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.less']
})
export class SubscriptionsComponent implements OnInit {
  users: Observable<UserData[]>;
  login: string;
  userId = localStorage.getItem('userId');
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.users = this.service.getUsers();
    this.login = `${localStorage.getItem('userLogin')}`;
  }

}
