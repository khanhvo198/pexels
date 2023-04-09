import { Injectable } from '@angular/core';
import {
  Observable,
  ReplaySubject,
  defer,
  of,
  startWith,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Pagination } from '../shared/data-access/pexels/paginatior.model';
import { PexelsService } from './pexels.service';

@Injectable()
export class PhotoService {
  state$: Observable<Pagination>;
  private stateSubject = new ReplaySubject<Pagination>(1);
  constructor(private pexelsService: PexelsService) {
    this.state$ = this.stateSubject.asObservable().pipe(
      startWith({
        total: 0,
        page: 0,
        photos: [],
        query: '',
        defaultQuery: '',
      })
    );
  }

  initializeWithDefaultQuery(defaultQuery: string) {
    of(null)
      .pipe(
        withLatestFrom(this.state$),
        switchMap(([, previousState]) => {
          if (!previousState.defaultQuery) {
            this.stateSubject.next({
              ...previousState,
              query: defaultQuery,
              defaultQuery,
            });
          }
          return of(null);
        })
      )
      .subscribe(() => {});
  }

  setState(state: Partial<Pagination>) {
    of(null)
      .pipe(
        withLatestFrom(this.state$),
        switchMap(([, previousState]) =>
          defer(() => {
            const pageIndex =
              state.page !== undefined ? state.page : previousState.page;
            const query = state.query || previousState.defaultQuery;
            return query
              ? this.pexelsService.getPhotosWithSearch(pageIndex, query)
              : this.pexelsService.getPhotosRandom(pageIndex);
          }).pipe(
            tap((response) => {
              const pageIndex =
                state.page !== undefined ? state.page : previousState.page;
              this.stateSubject.next({
                page: pageIndex,
                total: response.total_results || previousState.total,
                photos: response.photos,
                query: state.query || previousState.query,
                defaultQuery: state.defaultQuery || previousState.defaultQuery,
              });
            })
          )
        )
      )
      .subscribe(() => {});
  }

  setQuery(query: string) {
    this.setState({ query, defaultQuery: query, page: 0 });
  }
}
