import { Component, Input } from '@angular/core';
import { clienteModel } from 'src/app/domain/models/clientes/clientes.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderListClientesPipe } from '../../../../../../../shared/pipes/order/clientes/order-list-clientes.pipe';
import { MensajeTablaVaciaComponent } from '../../../../../../../shared/components/validadores/mensaje-tabla-vacia/mensaje-tabla-vacia.component';
import { LoadersTablesPagesComponent } from '../../../../../../../shared/components/organisms/loaders-tables-pages/loaders-tables-pages.component';
import { NgIf, NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-table-datos-clientes',
    templateUrl: './table-datos-clientes.component.html',
    styleUrls: ['./table-datos-clientes.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgIf, NgFor, LoadersTablesPagesComponent, MensajeTablaVaciaComponent, OrderListClientesPipe, NgxPaginationModule]
})
export class TableDatosClientesComponent {
  @Input() nombrePagina:  String = '';
  @Input() dataClientes:  Array<clienteModel> = [];
  @Input() isLoading : boolean = true;
  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }

  @Input() pParemetro: number = 1;
  @Input() cantidadPaginas: number = 1;

  collection: any[] = this.dataClientes;
}
