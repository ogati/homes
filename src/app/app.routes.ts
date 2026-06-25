import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home'
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details').then(c => c.Details), // lazy routing
    title: 'Home Detail'
  }
];
