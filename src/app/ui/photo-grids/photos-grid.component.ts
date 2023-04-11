import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { PhotoStore } from '../../shared/data-access/photos/photos.store';
import { PaginatorComponent } from '../paginator/paginator.component';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-photo-grids',
  template: `
    <app-paginator></app-paginator>
    <app-search
      *ngIf="withSearch"
      [defaultQuery]="(photosStore.query$ | async)!"
      (query)="photosStore.setQuery($event)"
    ></app-search>
    <div class="photos-grid">
      <app-photo-card
        *ngFor="let photo of photosStore.photos$ | async"
        [photo]="photo"
      ></app-photo-card>
    </div>
  `,
  styleUrls: ['photos-grid.component.scss'],
  standalone: true,
  imports: [
    PhotoCardComponent,
    NgIf,
    PaginatorComponent,
    SearchComponent,
    AsyncPipe,
    NgForOf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosGridComponent {
  @Input() withSearch!: boolean;

  readonly photosStore = inject(PhotoStore);
}
