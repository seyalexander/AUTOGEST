import { Component, Input } from '@angular/core';
import { tipoDocumentosModel } from 'src/app/domain/models/tipo-documentos/tipo-documentos.model';
import { OrderListTipoDocumentoPipe } from '../../../../../../../shared/pipes/order/tipo-documento/order-list-tipo-documento.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-tabla-datos-tipo-documentos',
    templateUrl: './tabla-datos-tipo-documentos.component.html',
    styleUrls: ['./tabla-datos-tipo-documentos.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListTipoDocumentoPipe]
})
export class TablaDatosTipoDocumentosComponent {
  @Input() dataTipoDocumento:  Array<tipoDocumentosModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
