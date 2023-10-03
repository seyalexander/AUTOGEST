import { Component, Input } from '@angular/core';
import { rolUsuarioModel } from 'src/app/domain/models/rol-usuario/rol-usaurio.model';
import { OrderListRolUsuarioPipe } from '../../../../../../../shared/pipes/order/rol-usuario/order-list-rol-usuario.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-table-datos-rol-usuarios',
    templateUrl: './table-datos-rol-usuarios.component.html',
    styleUrls: ['./table-datos-rol-usuarios.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListRolUsuarioPipe]
})
export class TableDatosRolUsuariosComponent {
  @Input() dataRolUsuarios: Array<rolUsuarioModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
