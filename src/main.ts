import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { withInterceptorsFromDi, provideHttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app/app-routing.module';
import { familiaProductosGateway } from './app/domain/models/familia-productos/gateway/familiaProductos-gateway';
import { FamiliaProductosApiService } from './app/infraestrcuture/driven-adapter/familia-productos/familia-productos-api.service';
import { productosGateway } from './app/domain/models/productos/gateway/productos-gateway';
import { ProductosApiService } from './app/infraestrcuture/driven-adapter/productos/productos-api.service';
import { choferesGateway } from './app/domain/models/choferes/gateway/choferes-gateway';
import { ChoferesApiService } from './app/infraestrcuture/driven-adapter/choferes/choferes-api.service';
import { AuthService } from './app/infraestrcuture/driven-adapter/login/auth.service';
import { ErrorInterceptorService } from './app/infraestrcuture/driven-adapter/login/error-interceptor.service';
import { ClienteInterceptorService } from './app/infraestrcuture/core/interceptores/cliente-interceptor.service';


bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(AppRoutes),
        HttpClientModule,
        importProvidersFrom(BrowserModule, NgxPaginationModule),
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
        { provide: familiaProductosGateway, useClass: FamiliaProductosApiService },
        { provide: productosGateway, useClass: ProductosApiService },
        { provide: choferesGateway, useClass: ChoferesApiService },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {provide:HTTP_INTERCEPTORS,useClass:ClienteInterceptorService,multi:true},
        {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
