import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosPageComponent } from './components/pages/lista-empleados-page/lista-empleados-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaEmpleadosPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
