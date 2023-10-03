import { Component, Input } from '@angular/core';
import { tipoDocumentosModel } from 'src/app/domain/models/tipo-documentos/tipo-documentos.model';

@Component({
  selector: 'app-tabla-datos-tipo-documentos',
  templateUrl: './tabla-datos-tipo-documentos.component.html',
  styleUrls: ['./tabla-datos-tipo-documentos.component.css']
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
