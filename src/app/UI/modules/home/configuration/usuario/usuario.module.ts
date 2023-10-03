import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListaUsuariosPageComponent } from './components/pages/lista-usuarios-page/lista-usuarios-page.component';

import { TableDatosUsuariosComponent } from './components/organisms/table-datos-usuarios/table-datos-usuarios.component';
import { RegistroDatosUsuarioPageComponent } from './components/pages/registro-datos-usuario-page/registro-datos-usuario-page.component';


@NgModule({
    imports: [
    CommonModule,
    UsuarioRoutingModule,
    ListaUsuariosPageComponent,
    TableDatosUsuariosComponent,
    RegistroDatosUsuarioPageComponent
]
})
export class UsuarioModule { }
