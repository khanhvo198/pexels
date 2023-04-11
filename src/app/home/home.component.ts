import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PhotosGridComponent } from '../ui/photo-grids/photos-grid.component';
import { SearchComponent } from '../ui/search/search.component';

@Component({
  selector: 'app-home',
  template: `
    <app-photo-grids [withSearch]="true"></app-photo-grids>
  `,
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
  constructor() {}
}
