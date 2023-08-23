import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { IPost, IUser } from 'src/app/types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  public posts: IPost[] = [];
  public users: IUser[] = [];

  constructor(
    private postService: PostsService,
    private userService: UsersService
  ) {}

  getUserName = this.userService.getUserName

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
