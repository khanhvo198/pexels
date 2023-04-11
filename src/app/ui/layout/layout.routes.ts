import { InjectionToken } from '@angular/core';
import { Route } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { PaginationStore } from 'src/app/shared/data-access/pagination/pagination.store';
import { PhotoStore } from '../../shared/data-access/photos/photos.store';

export const defaultQueryToken = new InjectionToken<string>('defaultQuery');

const layoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../../home/home.component'),
    providers: [
      provideComponentStore(PaginationStore),
      provideComponentStore(PhotoStore),
      { provide: defaultQueryToken, useValue: 'nature' },
    ],
  },
  {
    path: 'random',
    loadComponent: () => import('../../random/random.component'),
    providers: [
      provideComponentStore(PaginationStore),
      provideComponentStore(PhotoStore),
      { provide: defaultQueryToken, useValue: '' },
    ],
  },
];

export default layoutRoutes;
