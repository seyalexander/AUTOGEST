import { Routes } from '@angular/router';
import { HomePageComponent } from './UI/modules/home/home/components/home-page/home-page.component';
import { ListaLoginPagesComponent } from './UI/modules/auth/components/pages/lista-login-pages/lista-login-pages.component';

export const AppRoutes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  //   loadChildren: () => import ('./UI/modules/home/home/home-routing.module').then(m=>m.homeRoutes)
  // },
  {
    path: '',
    component: ListaLoginPagesComponent,
    loadChildren: () => import ('./UI/modules/auth/auth-routing.module').then(m => m.Authroutes)
  }
];
