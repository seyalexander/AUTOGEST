import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { clientesGateway } from './domain/models/clientes/gateway/clientes-gateway';
import { ClientesApiService } from './infraestrcuture/driven-adapter/clientes/clientes-api.service';
import { marcaAutosGateway } from './domain/models/marcas-autos/gateway/marca-autos-gateway';
import { MarcaAutosApiService } from './infraestrcuture/driven-adapter/marca-autos/marca-autos-api.service';
import { modeloAutosGateway } from './domain/models/modelo-autos/gateway/modelo-autos-gateway';
import { ModeloAutosApiService } from './infraestrcuture/driven-adapter/modelo-autos/modelo-autos-api.service';
import { autosGateway } from './domain/models/autos/gateway/autos-gateway';
import { AutosApiService } from './infraestrcuture/driven-adapter/autos/autos-api.service';
import { tipoDocumentoGateway } from './domain/models/tipo-documentos/gateway/tipo-documentos-gateway';
import { TipoDocumentoApiService } from './infraestrcuture/driven-adapter/tipo-documento/tipo-documento-api.service';
import { empleadoGateway } from './domain/models/empleado/gateway/empleado-gateway';
import { EmpleadosApiService } from './infraestrcuture/driven-adapter/empleados/empleados-api.service';
import { ordenTrabajoGateway } from './domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { OrdenTrabajoApiService } from './infraestrcuture/driven-adapter/orden-trabajo/orden-trabajo-api.service';
import { reparacionGateway } from './domain/models/reparacion/gateway/reparacion-gateway';
import { ReparacionApiService } from './infraestrcuture/driven-adapter/reparacion/reparacion-api.service';
import { rolUsuarioGateway } from './domain/models/rol-usuario/gateway/rol-usuario-gateway';
import { RolUsuarioApiService } from './infraestrcuture/driven-adapter/rol-usuarios/rol-usuario-api.service';
import { usuariosGateway } from './domain/models/usuario/gateway/usuario-gateway';
import { UsuariosApiService } from './infraestrcuture/driven-adapter/usuarios/usuarios-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: clientesGateway, useClass: ClientesApiService},
    {provide: marcaAutosGateway, useClass: MarcaAutosApiService},
    {provide: modeloAutosGateway, useClass: ModeloAutosApiService},
    {provide: autosGateway, useClass: AutosApiService},
    {provide: tipoDocumentoGateway, useClass: TipoDocumentoApiService},
    {provide: empleadoGateway, useClass: EmpleadosApiService},
    {provide: ordenTrabajoGateway, useClass: OrdenTrabajoApiService},
    {provide: reparacionGateway, useClass: ReparacionApiService},
    {provide: rolUsuarioGateway, useClass: RolUsuarioApiService},
    {provide: usuariosGateway, useClass: UsuariosApiService},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
