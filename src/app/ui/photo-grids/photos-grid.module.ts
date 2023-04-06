import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PhotosGridComponent} from "./photos-grid.component";
import {PhotoCardComponent} from "../photo-card/photo-card.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [PhotosGridComponent, PhotoCardComponent],
  exports: [
    PhotosGridComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    NgOptimizedImage
  ]
})
export class PhotosGridModule { }
