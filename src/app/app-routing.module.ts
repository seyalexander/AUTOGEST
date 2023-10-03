import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './UI/modules/home/home/components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import ('./UI/modules/home/home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
