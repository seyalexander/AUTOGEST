import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './layouts/aside/aside.component';
import { ButtonTextIconSidebarComponent } from './components/atoms/button-text-icon-sidebar/button-text-icon-sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderConfigurationComponent } from './components/organisms/header-configuration/header-configuration.component';
import { HeaderPagesConfigurationComponent } from './components/organisms/header-pages-configuration/header-pages-configuration.component';
import { ThTablesIconTextComponent } from './components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { OrderListClientesPipe } from './pipes/order/clientes/order-list-clientes.pipe';
import { OrderListMarcaAutosPipe } from './pipes/order/marca-autos/order-list-marca-autos.pipe';
import { OrderListModeloAutosPipe } from './pipes/order/modelo-autos/order-list-modelo-autos.pipe';
import { OrderListAutosPipe } from './pipes/order/autos/order-list-autos.pipe';
import { OrderListEmpleadosPipe } from './pipes/order/empleados/order-list-empleados.pipe';
import { OrderListOrdenTrabajoPipe } from './pipes/order/orden-trabajo/order-list-orden-trabajo.pipe';
import { OrderListReparacionPipe } from './pipes/order/reparacion/order-list-reparacion.pipe';
import { OrderListRolUsuarioPipe } from './pipes/order/rol-usuario/order-list-rol-usuario.pipe';
import { OrderListUsuarioPipe } from './pipes/order/usuario/order-list-usuario.pipe';
import { OrderListTipoDocumentoPipe } from './pipes/order/tipo-documento/order-list-tipo-documento.pipe';
import { HeaderMovilHomeComponent } from './components/organisms/header-movil-home/header-movil-home.component';
import { LoadersTablesPagesComponent } from './components/organisms/loaders-tables-pages/loaders-tables-pages.component';
import { MensajeDatosIncorrectosComponent } from './components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { MensajeTablaVaciaComponent } from './components/validadores/mensaje-tabla-vacia/mensaje-tabla-vacia.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsideComponent,
    ButtonTextIconSidebarComponent,
    HeaderConfigurationComponent,
    HeaderPagesConfigurationComponent,
    ThTablesIconTextComponent,
    OrderListClientesPipe,
    OrderListMarcaAutosPipe,
    OrderListModeloAutosPipe,
    OrderListAutosPipe,
    OrderListEmpleadosPipe,
    OrderListOrdenTrabajoPipe,
    OrderListReparacionPipe,
    OrderListRolUsuarioPipe,
    OrderListUsuarioPipe,
    OrderListTipoDocumentoPipe,
    HeaderMovilHomeComponent,
    LoadersTablesPagesComponent,
    MensajeDatosIncorrectosComponent,
    MensajeTablaVaciaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AsideComponent,
    HeaderConfigurationComponent,
    HeaderPagesConfigurationComponent,
    ThTablesIconTextComponent,
    OrderListClientesPipe,
    OrderListMarcaAutosPipe,
    OrderListModeloAutosPipe,
    OrderListAutosPipe,
    OrderListEmpleadosPipe,
    OrderListOrdenTrabajoPipe,
    OrderListReparacionPipe,
    OrderListRolUsuarioPipe,
    OrderListUsuarioPipe,
    OrderListTipoDocumentoPipe,
    HeaderMovilHomeComponent,
    LoadersTablesPagesComponent,
    MensajeDatosIncorrectosComponent,
    MensajeTablaVaciaComponent,
    ButtonTextIconSidebarComponent
  ]
})
export class SharedModule { }
