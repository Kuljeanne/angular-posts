import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProtectedRouteComponent } from './components/protected-route/protected-route.component';

const routes: Routes = [
  {
    path: 'posts',
    component: ProtectedRouteComponent,
    children: [
      { path: '', component: PostsComponent },
      { path: ':postId', component: PostDetailComponent },
    ],
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'sign-in', component: AuthFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
