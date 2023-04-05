import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavComponent} from "./side-nav.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [SideNavComponent],
  exports: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,

  ]
})
export class SideNavModule { }
