import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productosGateway } from 'src/app/domain/models/productos/gateway/productos-gateway';
import { productosModel } from 'src/app/domain/models/productos/productos.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosApiService extends productosGateway {

  private URL = environment.api;

  override getAllProductos(): Observable<productosModel[]> {
    return this.httpClient.get<productosModel[]>(`${this.URL}/MostrarProducto`)
  }

  override newProducto(productos: productosModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarProducto`,productos)
  }

  override getById(id: number): Observable<productosModel> {
    return this.httpClient.get<productosModel>(`${this.URL}/BuscarProducto/${id}`)
  }

  override updateProductos(id_Producto: number, productos: productosModel): Observable<Object> {
    return this.httpClient.put(`${this.URL}/ActualizarProducto/${id_Producto}`, productos)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
