import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "./top-bar.component";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [TopBarComponent],
  exports: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class TopBarModule { }
