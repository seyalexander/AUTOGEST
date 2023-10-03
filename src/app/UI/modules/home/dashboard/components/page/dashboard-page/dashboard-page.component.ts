import { Component } from '@angular/core';
import { TarjetaDescripcionPrincipalComponent } from '../../organisms/tarjeta-descripcion-principal/tarjeta-descripcion-principal.component';
import { TargetDataOrganismsComponent } from '../../organisms/target-data-organisms/target-data-organisms.component';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css'],
    standalone: true,
    imports: [TargetDataOrganismsComponent, TarjetaDescripcionPrincipalComponent]
})
export class DashboardPageComponent {

}
