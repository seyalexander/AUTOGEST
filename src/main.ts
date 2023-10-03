import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app/app-routing.module';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UsuariosApiService } from './app/infraestrcuture/driven-adapter/usuarios/usuarios-api.service';
import { usuariosGateway } from './app/domain/models/usuario/gateway/usuario-gateway';
import { RolUsuarioApiService } from './app/infraestrcuture/driven-adapter/rol-usuarios/rol-usuario-api.service';
import { rolUsuarioGateway } from './app/domain/models/rol-usuario/gateway/rol-usuario-gateway';
import { ReparacionApiService } from './app/infraestrcuture/driven-adapter/reparacion/reparacion-api.service';
import { reparacionGateway } from './app/domain/models/reparacion/gateway/reparacion-gateway';
import { OrdenTrabajoApiService } from './app/infraestrcuture/driven-adapter/orden-trabajo/orden-trabajo-api.service';
import { ordenTrabajoGateway } from './app/domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { EmpleadosApiService } from './app/infraestrcuture/driven-adapter/empleados/empleados-api.service';
import { empleadoGateway } from './app/domain/models/empleado/gateway/empleado-gateway';
import { TipoDocumentoApiService } from './app/infraestrcuture/driven-adapter/tipo-documento/tipo-documento-api.service';
import { tipoDocumentoGateway } from './app/domain/models/tipo-documentos/gateway/tipo-documentos-gateway';
import { AutosApiService } from './app/infraestrcuture/driven-adapter/autos/autos-api.service';
import { autosGateway } from './app/domain/models/autos/gateway/autos-gateway';
import { ModeloAutosApiService } from './app/infraestrcuture/driven-adapter/modelo-autos/modelo-autos-api.service';
import { modeloAutosGateway } from './app/domain/models/modelo-autos/gateway/modelo-autos-gateway';
import { MarcaAutosApiService } from './app/infraestrcuture/driven-adapter/marca-autos/marca-autos-api.service';
import { marcaAutosGateway } from './app/domain/models/marcas-autos/gateway/marca-autos-gateway';
import { ClientesApiService } from './app/infraestrcuture/driven-adapter/clientes/clientes-api.service';
import { clientesGateway } from './app/domain/models/clientes/gateway/clientes-gateway';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, NgxPaginationModule),
        { provide: clientesGateway, useClass: ClientesApiService },
        { provide: marcaAutosGateway, useClass: MarcaAutosApiService },
        { provide: modeloAutosGateway, useClass: ModeloAutosApiService },
        { provide: autosGateway, useClass: AutosApiService },
        { provide: tipoDocumentoGateway, useClass: TipoDocumentoApiService },
        { provide: empleadoGateway, useClass: EmpleadosApiService },
        { provide: ordenTrabajoGateway, useClass: OrdenTrabajoApiService },
        { provide: reparacionGateway, useClass: ReparacionApiService },
        { provide: rolUsuarioGateway, useClass: RolUsuarioApiService },
        { provide: usuariosGateway, useClass: UsuariosApiService },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
