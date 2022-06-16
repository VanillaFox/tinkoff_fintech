import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { PostsService } from 'src/services/posts.service';
import { PostId, UserData } from 'src/shared/IDate';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: PostId;
  @Output() editEmit = new EventEmitter<void>();
  userLogin: Observable<UserData>;
  time: Date;
  open: boolean = false;
  isMyPost: boolean = false;
  comments: Observable<any[]>;
  openFlagComments: boolean = false;
  form: FormGroup;
  subscribe: any;

  constructor(private service: AppService, private postsService: PostsService) { }

  toggle(): void{
    this.open = !this.open;
  }

  openComments(): void{
    this.openFlagComments = !this.openFlagComments;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      comment: new FormControl(null, Validators.required)
    })
    this.comments = this.postsService.getComments(`${this.post.id}`);
    this.subscribe = this.service.idToLogin(`${this.post?.userId}`).pipe(
      switchMap((item) => {
        this.userLogin = of(item);
        return of(item)
      })
    )
    .subscribe((item) => {
      this.isMyPost = item?.login===localStorage.getItem('userLogin')
    })
    this.time = new Date(this.post.data?.seconds * 1000);
  }

  delete(): void{
    this.toggle();
    this.postsService.deletePost(`${this.post.id}`);
  }

  sendComment(): void{
    if(this.form.valid){
      this.postsService.createComment(`${this.post.id}`, this.form.get('comment')?.value);
      this.form.reset();
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
