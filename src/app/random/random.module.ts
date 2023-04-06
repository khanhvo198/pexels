import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RandomComponent} from "./random.component";
import {Route, RouterModule} from "@angular/router";
import {PhotosGridModule} from "../ui/photo-grids/photos-grid.module";


const routes: Route[] = [
  {path: '', component: RandomComponent}
]
@NgModule({
  declarations: [RandomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhotosGridModule
  ]
})
export class RandomModule { }
