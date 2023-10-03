import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReparacionPageComponent } from './components/pages/lista-reparacion-page/lista-reparacion-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaReparacionPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReparacionRoutingModule { }
