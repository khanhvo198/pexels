import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../../shared/data-access/pexels/pexels.model';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo-grids',
  template: `
    <div class="photos-grid">
      <app-photo-card
        *ngFor="let photo of photos"
        [photo]="photo"
      ></app-photo-card>
    </div>
  `,
  styleUrls: ['photos-grid.component.scss'],
  standalone: true,
  imports: [PhotoCardComponent, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosGridComponent {
  @Input() photos!: Photo[];
  @Input() withSearch!: boolean;
}
