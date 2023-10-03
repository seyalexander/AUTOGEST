import { autosModel } from "../autos/autos.model";
import { empleadoModel } from "../empleado/empleado.model";

export class ordenTrabajoModel {
  Id_Orden_Trabajo: String | number = '';
  Numero_Orden: number = 0;
  Fecha_Entrada: String = '';
  Descripcion_Problema: String = '';
  Estado_Orden: number = 0;
  Id_Auto_Fk: autosModel = {} as autosModel;
  Id_Empleado_Fk: empleadoModel = {} as empleadoModel;
}
