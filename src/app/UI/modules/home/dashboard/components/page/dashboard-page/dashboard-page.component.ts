import { Component } from '@angular/core';
import { TarjetaDescripcionPrincipalComponent } from '../../organisms/tarjeta-descripcion-principal/tarjeta-descripcion-principal.component';
import { TargetDataOrganismsComponent } from '../../organisms/target-data-organisms/target-data-organisms.component';
import { GetClientesUseCases } from 'src/app/domain/useCase/get-clientes-use-case';
import { clienteModel } from 'src/app/domain/models/clientes/clientes.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GetAutosUseCases } from 'src/app/domain/useCase/get-autos-use-case';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { AuthService } from 'src/app/infraestrcuture/driven-adapter/login/auth.service';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css'],
    standalone: true,
    imports: [TargetDataOrganismsComponent, TarjetaDescripcionPrincipalComponent, CommonModule]
})
export class DashboardPageComponent {

  //================================================================
  // Decalrar e Inicializar cantidades
  //================================================================
  cantidadClientes: number = 3
  cantidadAutos: number = 3

  userLoginOn:boolean=false;

  constructor(
    private _getClientesUseCase: GetClientesUseCases,
    private _getAutosUseCase: GetAutosUseCases,
    private loginService: AuthService
  ){}


  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
        this.obtenerClientesExito();
        this.obtenerAutosExito();
      }
    });

  }

  //================================================================
  // Obtener datos clientes
  //================================================================

  obtenerClientesExito(): void {
    this.clientesSubscription = this._getClientesUseCase.getAllClientes().
      subscribe((Response: clienteModel[]) => {
        this.cantidadClientes = Response.length
      })
  }

  //================================================================
  // Obtener datos autos
  //================================================================

  obtenerAutosExito(): void {
    this.autosSubscription = this._getAutosUseCase.getAllAutos().
      subscribe((Response: autosModel[]) => {
        this.cantidadAutos = Response.length
      })
  }

  //================================================================
  // Destruir susbcriptiones
  //================================================================

  private clientesSubscription: Subscription | undefined;
  private autosSubscription: Subscription | undefined;

  ngOnDestroy(): void {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
    if (this.autosSubscription) {
      this.autosSubscription.unsubscribe();
    }
  }
}
