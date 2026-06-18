import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DetailsComponent } from './details/details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];
