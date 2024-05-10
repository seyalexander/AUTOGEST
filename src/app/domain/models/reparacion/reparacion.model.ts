
import { autosModel } from "../autos/autos.model";
import { clienteModel } from "../clientes/clientes.model";
import { ordenTrabajoModel } from "../orden-trabajo/orden-trabajo.model";
import { productosModel } from "../productos/productos.model";

export class reparacionModel {
  id_Detalle_Servicio: String | number = '';
  detalle_Servicio: String = '';
  id_Producto_Fk: productosModel = {} as productosModel;
  precio_Producto: number = 0.0
  id_Auto_Fk: autosModel = {} as autosModel;
  idClienteFk: clienteModel = {} as clienteModel;
}
