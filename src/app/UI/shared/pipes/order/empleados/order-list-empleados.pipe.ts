import { Pipe, PipeTransform } from '@angular/core';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';

@Pipe({
    name: 'orderListEmpleados',
    standalone: true
})
export class OrderListEmpleadosPipe implements PipeTransform {

  transform( value: Array<any>,args: string | null = null, sort: string = 'asc'): empleadoModel[] {
    try {
      if(args == null) { return value; }
      else {
        const tmpList = value.sort(function (a, b) {
          if (a[args] < b[args]) {
            return -1;
          } else if (a[args] == b[args]) {
            return 0;
          } else if (a[args] < b[args]) {
            return 1;
          }
          return 1;
        });
        return (sort == 'asc') ? tmpList :tmpList.reverse();
      }

    } catch (e) {
      console.log('Error al filtrar');
      return value;
    }
  }

}
