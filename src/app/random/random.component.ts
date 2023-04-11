import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PhotoService } from '../services/photo.service';
import { PhotosGridComponent } from '../ui/photo-grids/photos-grid.component';

@Component({
  selector: 'app-random',
  template: `
    <ng-container *ngIf="state$ | async as state">
      <mat-paginator
        [length]="state.total"
        [pageSize]="15"
        [pageIndex]="state.page"
        [showFirstLastButtons]="true"
        (page)="onPageChanged($event)"
      ></mat-paginator>

      <app-photo-grids [photos]="state.photos"></app-photo-grids>
    </ng-container>
  `,
  styleUrls: ['./random.component.scss'],
  standalone: true,
  imports: [MatPaginatorModule, PhotosGridComponent, NgIf, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RandomComponent {
  constructor(private photoService: PhotoService) {}

  state$ = this.photoService.state$;

  ngOnInit() {
    this.photoService.initializeWithDefaultQuery('');
    this.photoService.setState({});
  }

  onPageChanged({ pageIndex }: PageEvent) {
    this.photoService.setState({
      page: pageIndex,
    });
  }
}
