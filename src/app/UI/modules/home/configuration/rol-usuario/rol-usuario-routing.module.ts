import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRolUsuariosPageComponent } from './components/pages/lista-rol-usuarios-page/lista-rol-usuarios-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaRolUsuariosPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolUsuarioRoutingModule { }
