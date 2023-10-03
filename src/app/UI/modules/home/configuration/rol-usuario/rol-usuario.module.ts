import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolUsuarioRoutingModule } from './rol-usuario-routing.module';
import { ListaRolUsuariosPageComponent } from './components/pages/lista-rol-usuarios-page/lista-rol-usuarios-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { TableDatosRolUsuariosComponent } from './components/organisms/table-datos-rol-usuarios/table-datos-rol-usuarios.component';
import { RegistroDatosRolUsuarioPageComponent } from './components/pages/registro-datos-rol-usuario-page/registro-datos-rol-usuario-page.component';


@NgModule({
  declarations: [
    ListaRolUsuariosPageComponent,
    TableDatosRolUsuariosComponent,
    RegistroDatosRolUsuarioPageComponent
  ],
  imports: [
    CommonModule,
    RolUsuarioRoutingModule,
    SharedModule
  ]
})
export class RolUsuarioModule { }
