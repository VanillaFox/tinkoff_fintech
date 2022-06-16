import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/services/posts.service';
import { PostId } from 'src/shared/IDate';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  @Output() editPost = new EventEmitter<void>();
  posts: Observable<PostId[]>
  constructor(public service: PostsService) {}

  ngOnInit(): void {
    this.posts = this.service.getAllPosts();
  }
}
