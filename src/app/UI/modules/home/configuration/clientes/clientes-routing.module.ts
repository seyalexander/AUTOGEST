import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesPageComponent } from './components/pages/lista-clientes-page/lista-clientes-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaClientesPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
