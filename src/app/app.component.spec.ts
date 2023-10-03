import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { clientesGateway } from './domain/models/clientes/gateway/clientes-gateway';
import { marcaAutosGateway } from './domain/models/marcas-autos/gateway/marca-autos-gateway';
import { modeloAutosGateway } from './domain/models/modelo-autos/gateway/modelo-autos-gateway';
import { autosGateway } from './domain/models/autos/gateway/autos-gateway';
import { tipoDocumentoGateway } from './domain/models/tipo-documentos/gateway/tipo-documentos-gateway';
import { empleadoGateway } from './domain/models/empleado/gateway/empleado-gateway';
import { ordenTrabajoGateway } from './domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { reparacionGateway } from './domain/models/reparacion/gateway/reparacion-gateway';
import { rolUsuarioGateway } from './domain/models/rol-usuario/gateway/rol-usuario-gateway';
import { usuariosGateway } from './domain/models/usuario/gateway/usuario-gateway';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ClientesApiService } from './infraestrcuture/driven-adapter/clientes/clientes-api.service';
import { MarcaAutosApiService } from './infraestrcuture/driven-adapter/marca-autos/marca-autos-api.service';
import { ModeloAutosApiService } from './infraestrcuture/driven-adapter/modelo-autos/modelo-autos-api.service';
import { AutosApiService } from './infraestrcuture/driven-adapter/autos/autos-api.service';
import { TipoDocumentoApiService } from './infraestrcuture/driven-adapter/tipo-documento/tipo-documento-api.service';
import { EmpleadosApiService } from './infraestrcuture/driven-adapter/empleados/empleados-api.service';
import { OrdenTrabajoApiService } from './infraestrcuture/driven-adapter/orden-trabajo/orden-trabajo-api.service';
import { ReparacionApiService } from './infraestrcuture/driven-adapter/reparacion/reparacion-api.service';
import { RolUsuarioApiService } from './infraestrcuture/driven-adapter/rol-usuarios/rol-usuario-api.service';
import { UsuariosApiService } from './infraestrcuture/driven-adapter/usuarios/usuarios-api.service';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent],
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
      {provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SISTEMA_RETAIL_FRONT_ANGULAR'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SISTEMA_RETAIL_FRONT_ANGULAR');
  });


});
