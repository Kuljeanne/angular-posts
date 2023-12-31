import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { postResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: ':postId',
    component: PostDetailComponent,
    resolve: {post: postResolver}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRouteRoutingModule {}
