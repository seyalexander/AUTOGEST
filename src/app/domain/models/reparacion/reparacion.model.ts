
import { ordenTrabajoModel } from "../orden-trabajo/orden-trabajo.model";

export class reparacionModel {
  Id_Reparacion: String | number = '';
  Id_Orden_Trabajo_Fk: ordenTrabajoModel = {} as ordenTrabajoModel;
  Fecha_Entrega: String = '';
  Descripcion_Reparacion: String = '';
  Costo_Reparacion: number = 0.0;
}
