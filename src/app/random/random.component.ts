import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PageEvent } from '@angular/material/paginator';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomComponent {
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
