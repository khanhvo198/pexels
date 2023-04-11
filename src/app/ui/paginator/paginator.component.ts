import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LetModule } from '@ngrx/component';
import { PaginationStore } from 'src/app/shared/data-access/pagination/pagination.store';
@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, LetModule],
  template: `
    <mat-paginator
      *ngrxLet="paginationStore.paginator$ as paginator"
      [length]="paginator.total"
      [pageSize]="paginator.pageSize"
      [pageIndex]="paginator.pageIndex"
      [showFirstLastButtons]="true"
      (page)="paginationStore.setPage($event.pageIndex + 1)"
    ></mat-paginator>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  readonly paginationStore = inject(PaginationStore);
}
