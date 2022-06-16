import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FollowService } from 'src/services/follow.service';
import { UserData } from 'src/shared/IDate';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.less']
})
export class FollowersComponent implements OnInit {
  userId: string;
  users: Observable<UserData[]>;
  login: string;
  constructor(private service: FollowService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((item) => {
      this.userId = item['user'];
      this.login = `${localStorage.getItem('userLogin')}`;
      this.users = this.service.getFollowers(this.userId);
    })
  }

}
