import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './components/page/dashboard-page/dashboard-page.component';
import { TargetDataOrganismsComponent } from './components/organisms/target-data-organisms/target-data-organisms.component';
import { TarjetaDescripcionPrincipalComponent } from './components/organisms/tarjeta-descripcion-principal/tarjeta-descripcion-principal.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    TargetDataOrganismsComponent,
    TarjetaDescripcionPrincipalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
