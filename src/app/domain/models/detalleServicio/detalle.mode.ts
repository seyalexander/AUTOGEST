import { productosModel } from "../productos/productos.model";

export class detalleServicioModel {
  id_Detalle_Servicio: number = 0;
  servicioRealizado: string = '';
  detalle_Servicio: string = '';
  subtotal_Producto: number = 0.0;
  id_Servicio_Fk: string = '';
  id_Producto_Fk: productosModel = {} as productosModel;
  precio_Cantidad: number = 0.0;
  precio_Producto: number = 0.0;
  precio_Servicio: number = 0.0;
}
