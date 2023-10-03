import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './components/page/dashboard-page/dashboard-page.component';
import { TargetDataOrganismsComponent } from './components/organisms/target-data-organisms/target-data-organisms.component';
import { TarjetaDescripcionPrincipalComponent } from './components/organisms/tarjeta-descripcion-principal/tarjeta-descripcion-principal.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DashboardPageComponent,
        TargetDataOrganismsComponent,
        TarjetaDescripcionPrincipalComponent
    ]
})
export class DashboardModule { }
