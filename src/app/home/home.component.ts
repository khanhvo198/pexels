import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="state$ | async as state">
      <mat-paginator
        [length]="state.total"
        [pageSize]="15"
        [pageIndex]="state.page"
        [showFirstLastButtons]="true"
        (page)="onPageChanged($event)"
      ></mat-paginator>
      <app-search
        [defaultQuery]="state.defaultQuery"
        (query)="onQueryChanged($event)"
      ></app-search>
      <app-photo-grids [photos]="state.photos"></app-photo-grids>
    </ng-container>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(private photoService: PhotoService) {}

  state$ = this.photoService.state$;

  ngOnInit() {
    this.photoService.initializeWithDefaultQuery('nature');
    this.photoService.setState({});
  }

  onPageChanged({ pageIndex }: PageEvent) {
    this.photoService.setState({
      page: pageIndex,
    });
  }
  onQueryChanged(query: string | null) {
    this.photoService.setQuery(String(query));
  }
}
