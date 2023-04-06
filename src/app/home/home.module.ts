import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {PhotosGridModule} from "../ui/photo-grids/photos-grid.module";
import {Route, RouterModule} from "@angular/router";
import {PaginatorComponent} from "../ui/paginator/paginator.component";
import {SearchComponent} from "../ui/search/search.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



const routes: Route[] = [
  {path: '', component: HomeComponent}
]
@NgModule({
  declarations: [HomeComponent, PaginatorComponent, SearchComponent],
  imports: [
    CommonModule,
    PhotosGridModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
