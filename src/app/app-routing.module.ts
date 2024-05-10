import { Routes } from '@angular/router';
import { HomePageComponent } from './UI/modules/home/home/components/home-page/home-page.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import ('./UI/modules/home/home/home-routing.module').then(m=>m.homeRoutes)
  }
];
