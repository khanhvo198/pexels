import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../../shared/data-access/pexels/pexels.model';
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

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
  standalone: true,
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
}
