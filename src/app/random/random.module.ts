import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomComponent } from './random.component';
import { Route, RouterModule } from '@angular/router';
import { PhotosGridModule } from '../ui/photo-grids/photos-grid.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PhotoService } from '../services/photo.service';

const routes: Route[] = [{ path: '', component: RandomComponent }];
@NgModule({
  declarations: [RandomComponent],
  imports: [
    CommonModule,
    PhotosGridModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [PhotoService],
})
export class RandomModule {}
