import { Injectable, inject } from '@angular/core';
import {
  ComponentStore,
  OnStateInit,
  OnStoreInit,
} from '@ngrx/component-store';
import {
  EMPTY,
  catchError,
  defer,
  pipe,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { PexelsService } from 'src/app/services/pexels.service';
import { defaultQueryToken } from '../../../ui/layout/layout.routes';
import { PaginationStore } from '../pagination/pagination.store';
import { Photo } from '../pexels/pexels.model';

@Injectable()
export class PhotoStore
  extends ComponentStore<{ photos: Photo[]; query: string }>
  implements OnStoreInit, OnStateInit
{
  private readonly defaultQuery = inject(defaultQueryToken);

  private readonly paginationStore = inject(PaginationStore);

  private readonly pexelsService = inject(PexelsService);

  readonly query$ = this.select((s) => s.query, { debounce: true });

  readonly photos$ = this.select((s) => s.photos);

  ngrxOnStoreInit() {
    this.setState({
      photos: [],
      query: this.defaultQuery,
    });
  }

  getPhotos = this.effect<{ page: number; query: string }>(
    pipe(
      switchMap(({ page, query }) =>
        defer(() =>
          query
            ? this.pexelsService.getPhotosWithSearch(page, query)
            : this.pexelsService.getPhotosRandom(page)
        ).pipe(
          tap((response) => {
            this.paginationStore.setTotal(response.total_results);
            this.patchState({
              photos: response.photos,
            });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  readonly setQuery = this.effect<string>(
    pipe(
      withLatestFrom(this.select((s) => s.query)),
      tap(([query, previousQuery]) => {
        if (previousQuery && !query) {
          this.paginationStore.setPage(1);
        }
        this.patchState({ query });
      })
    )
  );

  ngrxOnStateInit() {
    this.getPhotos(
      this.select(
        {
          page: this.paginationStore.currentPage$,
          query: this.query$,
        },
        { debounce: true }
      )
    );
  }
}
