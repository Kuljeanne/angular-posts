import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseComponent } from './components/base/base.component';
import { NotAuthComponent } from './components/not-auth/not-auth.component';
import { logInGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: NotAuthComponent },
      {
        path: 'posts',
        canActivate: [logInGuard],
        loadChildren: () =>
          import('./components/protected-route/protected-route.module').then(
            (m) => m.ProtectedRouteModule
          ),
      },
    ],
  },

  { path: 'login', component: AuthFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
