import { Component, Input } from '@angular/core';
import { clienteModel } from 'src/app/domain/models/clientes/clientes.model';

@Component({
  selector: 'app-table-datos-clientes',
  templateUrl: './table-datos-clientes.component.html',
  styleUrls: ['./table-datos-clientes.component.css']
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
