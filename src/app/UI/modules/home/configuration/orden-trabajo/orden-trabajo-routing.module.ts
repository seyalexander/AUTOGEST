import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOrdenTrabajoPageComponent } from './components/pages/lista-orden-trabajo-page/lista-orden-trabajo-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaOrdenTrabajoPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenTrabajoRoutingModule { }
