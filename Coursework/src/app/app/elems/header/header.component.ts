import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  login: string;
  constructor(public service: AppService, private postsService: PostsService) { }
  ngOnInit(): void {
    this.login = `${localStorage.getItem('userLogin')}`;
  }

  create(emit: string): void{
    this.postsService.createPost(emit);
    this.close();
  }

  close(): void {
    this.service.setOpenFlag(false);
  }

  open(): void{
    this.service.setOpenFlag(true);
  }

  logout(): void {
    this.service.logOut();
  }
}
