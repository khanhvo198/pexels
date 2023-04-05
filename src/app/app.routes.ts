import { Route } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

export const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./ui/layout/layout.module').then((m) => m.LayoutModule),
  },
];
