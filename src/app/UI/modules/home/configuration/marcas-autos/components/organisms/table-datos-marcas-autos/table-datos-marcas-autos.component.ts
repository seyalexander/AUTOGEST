import { Component, Input } from '@angular/core';
import { marcaAutosModel } from 'src/app/domain/models/marcas-autos/marca-autos.model';

@Component({
  selector: 'app-table-datos-marcas-autos',
  templateUrl: './table-datos-marcas-autos.component.html',
  styleUrls: ['./table-datos-marcas-autos.component.css']
})
export class TableDatosMarcasAutosComponent {
  @Input() dataMarcaAutos:  Array<marcaAutosModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
