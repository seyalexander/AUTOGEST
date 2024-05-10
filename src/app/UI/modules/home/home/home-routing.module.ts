import {  Routes } from '@angular/router';
import { authGuard } from 'src/app/infraestrcuture/core/guards/login/auth.guard';
import { authorizationGuard } from 'src/app/infraestrcuture/core/guards/login/authorization.guard';

export const homeRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import ('../dashboard/dashboard-routing.module').then(m=>m.dashboardRoutes),
    // canActivate: [authGuard, authorizationGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import ('../configuration/configuration/configuration-routing.module').then(m=>m.configuracionRoutes),
    // canActivate: [authGuard, authorizationGuard]
  },
  {
    path: 'operacion',
    loadChildren: () => import ('../process/process-routing.module').then(m=>m.processRoutes),
    // canActivate: [authGuard, authorizationGuard]
  },
  {
    path: '**',
    loadChildren: () => import ('../dashboard/dashboard-routing.module').then(m=>m.dashboardRoutes),
    redirectTo: ''
  }
];


