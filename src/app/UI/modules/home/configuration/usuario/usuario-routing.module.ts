import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosPageComponent } from './components/pages/lista-usuarios-page/lista-usuarios-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuariosPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
