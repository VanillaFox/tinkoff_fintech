import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { FollowService } from 'src/services/follow.service';
import { PostsService } from 'src/services/posts.service';
import { CommentId, UserData } from 'src/shared/IDate';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit, OnDestroy {
  @Input() comment: CommentId;
  @Output() editEmit = new EventEmitter<void>();
  userLogin: Observable<UserData>;
  time: Date;
  open: boolean = false;
  isMyPost: boolean = false;
  subscribe: any;

  constructor(private service: AppService, private postsService: PostsService) { }

  toggle(): void{
    this.open = !this.open;
  }

  ngOnInit(): void {
    this.subscribe = this.service.idToLogin(`${this.comment?.userId}`).pipe(
      switchMap((item) => {
        this.userLogin = of(item);
        return of(item)
      })
    )
    .subscribe((item) => {
      this.isMyPost = item?.login===localStorage.getItem('userLogin')
    })
    this.time = new Date(this.comment?.data.seconds * 1000);
  }

  delete(): void{
    this.toggle();
    this.postsService.deleteComment(`${this.comment.id}`);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
