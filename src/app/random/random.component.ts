import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PhotosGridComponent } from '../ui/photo-grids/photos-grid.component';

@Component({
  selector: 'app-random',
  template: `
    <app-photo-grids [withSearch]="false"></app-photo-grids>
  `,
  standalone: true,
  imports: [MatPaginatorModule, PhotosGridComponent, NgIf, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RandomComponent {
  constructor() {}
}
