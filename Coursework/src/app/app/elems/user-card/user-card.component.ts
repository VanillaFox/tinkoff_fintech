import { Component, Input, OnInit } from '@angular/core';
import { FollowService } from 'src/services/follow.service';
import { UserData } from 'src/shared/IDate';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
  @Input() userData: UserData;
  isFollowing: boolean;

  constructor(private followService: FollowService) { }

  ngOnInit(): void {
    this.followService.isFollowing(this.userData.id).subscribe((item) => this.isFollowing = item);
  }

  followAction(){
    if(this.isFollowing){
      this.followService.unfollow(this.userData.id)
    }
    else{
      this.followService.follow(this.userData.id)
    }
    this.isFollowing = !this.isFollowing;
  }
}
