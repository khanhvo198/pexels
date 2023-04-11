import { Route } from '@angular/router';
import {PhotoService} from "../../services/photo.service";

const layoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../../home/home.component'),
    providers: [PhotoService]
  },
  {
    path: 'random',
    loadComponent: () => import('../../random/random.component'),
    providers: [PhotoService]
  },
];

export default layoutRoutes;
