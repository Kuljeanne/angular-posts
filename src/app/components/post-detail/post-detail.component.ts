import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private postService: PostsService,
    private userService: UsersService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('postId'));
    const post$ = this.postService.getPostById(id)
    post$.subscribe((post) => (this.post = post));
    post$.subscribe((post)=>{
      this.userService.getUserById(post.userId).subscribe(
        user=> this.username = user.username
      )
    })

  }
}
