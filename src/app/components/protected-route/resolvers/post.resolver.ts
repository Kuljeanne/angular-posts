import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, catchError, delay } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from 'src/app/types';

export const postResolver: ResolveFn<IPost> = (route, state) => {
  const postsService = inject(PostsService);
  const router = inject(Router);

  return postsService.getPostById(route.params?.['postId']).pipe(
    catchError(() => {
      router.navigate(['posts'])
      return []
    })
  );
};
