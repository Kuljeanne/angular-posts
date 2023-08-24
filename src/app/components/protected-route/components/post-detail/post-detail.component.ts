import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { IPost } from 'src/app/types';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  public post!: IPost;
  public username!: string;
  public isLoading: boolean = true;

  constructor(
    private postService: PostsService,
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('postId'));
    const post$ = this.postService.getPostById(id);
    post$.subscribe((post) => {
      this.post = post;
      this.isLoading = false;
    });
    post$.subscribe((post) => {
      this.userService
        .getUserById(post.userId)
        .subscribe((user) => (this.username = user.username));
    });
  }
}
