import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('../dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import ('../configuration/configuration/configuration.module').then(m=>m.ConfigurationModule)
  },
  {
    path: '**',
    loadChildren: () => import ('../dashboard/dashboard.module').then(m=>m.DashboardModule),
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
