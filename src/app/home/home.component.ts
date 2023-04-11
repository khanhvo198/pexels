import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PhotoService } from '../services/photo.service';
import { PhotosGridComponent } from '../ui/photo-grids/photos-grid.component';
import { SearchComponent } from '../ui/search/search.component';

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
  standalone: true,
  imports: [
    MatPaginatorModule,
    SearchComponent,
    PhotosGridComponent,
    AsyncPipe,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
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
    console.log(query);
    if (query === null) {
      this.photoService.setState({ page: 0 });
      return;
    }
    this.photoService.setQuery(String(query));
  }
}
