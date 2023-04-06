import { Component } from '@angular/core';
import {PexelsService} from "../services/pexels.service";
import {Photo} from "../shared/data-access/pexels/pexels.model";

@Component({
  selector: 'app-home',
  template: `
    <app-paginator></app-paginator>
    <app-search></app-search>
    <app-photo-grids [withSearch]="true" [photos]="photos"></app-photo-grids>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private pexelsService: PexelsService) {}
  photos: Photo[] = [];
  ngOnInit() {
    this.pexelsService.getPhotos().subscribe((photos) => {
      this.photos = photos.photos
    });
  }
}
