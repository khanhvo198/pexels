import { Route } from '@angular/router';
export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./ui/layout/layout.module').then((m) => m.LayoutModule),
  },
];
