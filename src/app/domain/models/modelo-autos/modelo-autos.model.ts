import { marcaAutosModel } from "../marcas-autos/marca-autos.model";

export class modeloAutosModel {
  id_Modelo: String | number = '';
  Modelo: String = '';
  id_Marca: marcaAutosModel = {} as marcaAutosModel;
}
