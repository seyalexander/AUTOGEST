import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDatosEmpresaComponent } from './components/pages/lista-datos-empresa/lista-datos-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDatosEmpresaComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
