import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { clienteModel } from 'src/app/domain/models/clientes/clientes.model';
import { GetClientesUseCases } from 'src/app/domain/useCase/get-clientes-use-case';

@Component({
  selector: 'app-lista-clientes-page',
  templateUrl: './lista-clientes-page.component.html',
  styleUrls: ['./lista-clientes-page.component.css']
})
export class ListaClientesPageComponent implements OnDestroy {

  nombrePagina: String = 'CLIENTES';
  isLoading = false;
  datosClienteslista: Array<clienteModel> = [];
  listObservers$: Array<Subscription> = [];
  p: number = 1;
  cantDatosPorPagina: number = 7;
  mensajeServidor: String = '';

  constructor(private _getClientesUseCase: GetClientesUseCases) { }

  private clientesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.obtenerClientesExito();
  }

  obtenerClientesExito(): void {
    this.isLoading = true;
    this.clientesSubscription = this._getClientesUseCase.getAllClientes().
      subscribe((Response: clienteModel[]) => {
        this.datosClienteslista = Response;
        this.isLoading = false;
      })
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  recibirData(event: String): void {
    console.log('Estoy en el padre:...', event);

  }

  ngOnDestroy(): void {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
  }
}
