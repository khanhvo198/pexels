import { Injectable } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { map } from 'rxjs';

@Injectable()
export class PaginationStore
  extends ComponentStore<{
    pageSize: number;
    currentPage: number;
    total: number;
  }>
  implements OnStoreInit
{
  readonly currentPage$ = this.select((s) => s.currentPage);

  readonly paginator$ = this.select({
    pageIndex: this.currentPage$.pipe(map((page) => page - 1)),
    pageSize: this.select((s) => s.pageSize),
    total: this.select((s) => s.total),
  });

  ngrxOnStoreInit() {
    this.setState({
      pageSize: 15,
      currentPage: 1,
      total: 0,
    });
  }

  readonly setTotal = this.updater<number>((state, total) => ({
    ...state,
    total,
  }));

  readonly setPage = this.updater<number>((state, page) => ({
    ...state,
    currentPage: page,
  }));
}
