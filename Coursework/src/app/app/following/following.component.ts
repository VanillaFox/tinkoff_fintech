import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/shared/IDate';
import { ActivatedRoute } from '@angular/router';
import { FollowService } from 'src/services/follow.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.less']
})
export class FollowingComponent implements OnInit {

  userId: string;
  users: Observable<UserData[]>;
  login: string;
  constructor(private service: FollowService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((item) => {
      this.userId = item['user'];
      this.login = `${localStorage.getItem('userLogin')}`;
      this.users = this.service.getFollowing(this.userId);
    })
  }
}
