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
import { PexelsService } from '../services/pexels.service';
import { query, state } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  state$: Observable<Pagination>;
  private stateSubject = new ReplaySubject<Pagination>(1);
  constructor(private pexelsService: PexelsService) {
    this.state$ = this.stateSubject.asObservable().pipe(
      startWith({
        total: 0,
        page: 0,
        photos: [],
        query: '',
        defaultQuery: 'nature',
      })
    );
  }

  setState(state: Partial<Pagination>) {
    of(null)
      .pipe(
        withLatestFrom(this.state$),
        switchMap(([, previousState]) =>
          defer(() => {
            const pageIndex = state.page ? state.page + 1 : state.page;
            console.log(state);
            return state.query
              ? this.pexelsService.getPhotosWithSearch(pageIndex, state.query)
              : this.pexelsService.getPhotosRandom(pageIndex);
          }).pipe(
            tap((response) => {
              this.stateSubject.next({
                page: state.page || previousState.page,
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
    this.setState({ query });
  }
}
