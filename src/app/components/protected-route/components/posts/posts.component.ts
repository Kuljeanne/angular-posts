import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  public isLoading: boolean = true;
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10, 25];
  public visiblePosts: IPost[] = this.posts.slice(0, this.pageSize);

  constructor(
    private postService: PostsService,
    private userService: UsersService
  ) {}

  getUserName = this.userService.getUserName;

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.visiblePosts = this.posts.slice(0, this.pageSize);
      this.isLoading = false
    });
  }

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.visiblePosts = this.posts.slice(start, end);
  }
}
