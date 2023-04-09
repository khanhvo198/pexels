import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Route, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavModule } from '../side-nav/side-nav.module';
import { TopBarModule } from '../top-bar/top-bar.module';
const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'random',
        loadChildren: () =>
          import('../../random/random.module').then((m) => m.RandomModule),
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    SideNavModule,
    TopBarModule,
  ],
})
export class LayoutModule {}
