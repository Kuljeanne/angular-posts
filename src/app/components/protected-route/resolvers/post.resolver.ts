import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, catchError, delay } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

export const postResolver: ResolveFn<any> = (route, state) => {
  const postsService = inject(PostsService);
  const router = inject(Router);

  return postsService.getPostById(route.params?.['postId']).pipe(
    catchError(() => {
      router.navigate(['posts'])
      return EMPTY
    })
  );
};
