import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { FollowService } from 'src/services/follow.service';
import { PostsService } from 'src/services/posts.service';
import { PostId, UserData } from 'src/shared/IDate';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: Observable<UserData>;
  userPosts: Observable<PostId[]>;
  myLogin = localStorage.getItem('userLogin');
  userId: string;
  isFollowing: Observable<boolean>;
  isFollowingFlag: boolean;
  followersCount: Observable<number>;
  followingCount: Observable<number>;

  subscribe: any;

  constructor(public service: AppService, private followService: FollowService, private postsService: PostsService) {}

  ngOnInit(): void {
    this.user = this.service.getData();
    this.userPosts = this.postsService.getUserPosts();
    this.subscribe = this.user.subscribe((item) => {
      this.userId = item.id;
      this.followersCount = this.followService.followersCount(item.id);
      this.followingCount = this.followService.followingCount(item.id);
      this.isFollowing = this.followService.isFollowing(item.id);
      this.followService.isFollowing(item.id).subscribe((item) => this.isFollowingFlag = item)
    })
  }

  sub(): void{
    if(this.isFollowingFlag ){
      this.followService.unfollow(this.userId);
    }
    else{
      this.followService.follow(this.userId);
    }
    this.isFollowingFlag = !this.isFollowingFlag;
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
