import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Route, RouterModule } from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SideNavModule} from "../side-nav/side-nav.module";
import {TopBarModule} from "../top-bar/top-bar.module";
import {HomeComponent} from "../../home/home.component";
import {RandomComponent} from "../../random/random.component";

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'random', component: RandomComponent}

];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatSidenavModule, SideNavModule, TopBarModule],
})
export class LayoutModule {}
