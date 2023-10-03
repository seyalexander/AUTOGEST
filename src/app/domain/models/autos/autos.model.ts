import { clienteModel } from "../clientes/clientes.model";
import { modeloAutosModel } from "../modelo-autos/modelo-autos.model";

export class autosModel {
  id_Auto: String | number = '';
  Matricula: String = '';
  id_Modelo: modeloAutosModel = {} as modeloAutosModel;
  id_Cliente: clienteModel = {} as clienteModel;
}
