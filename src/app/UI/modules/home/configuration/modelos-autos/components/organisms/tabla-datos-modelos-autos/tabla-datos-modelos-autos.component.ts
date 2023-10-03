import { Component, Input } from '@angular/core';
import { modeloAutosModel } from 'src/app/domain/models/modelo-autos/modelo-autos.model';


@Component({
  selector: 'app-tabla-datos-modelos-autos',
  templateUrl: './tabla-datos-modelos-autos.component.html',
  styleUrls: ['./tabla-datos-modelos-autos.component.css']
})
export class TablaDatosModelosAutosComponent {
  @Input() dataModeloAutos:  Array<modeloAutosModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
