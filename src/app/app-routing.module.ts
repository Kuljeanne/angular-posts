import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  {
    path: 'posts',
    component: BaseComponent,
    children: [
      { path: '', component: PostsComponent },
      { path: ':postId', component: PostDetailComponent },
    ],
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'login', component: AuthFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
