import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../../shared/data-access/pexels/pexels.model';

@Component({
  selector: 'app-photo-card',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ photo.photographer }}</mat-card-title>
        <mat-card-subtitle>{{ photo.alt || 'Untitled' }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <img mat-card-image [ngSrc]="photo.src.large" fill [alt]="photo.alt" />
      </mat-card-content>
      <mat-card-actions>
        <a mat-button color="accent" [href]="photo.photographer_url">
          <mat-icon fontIcon="link"></mat-icon>
          {{ photo.photographer }}
        </a>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['photo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
}
