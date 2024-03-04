import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private httpClient:HttpClient) { }

  findDirecciones(){

    return this.httpClient.get(`${baseUrl}/direccion/direcciones`)

  }

  findDireccion(id:number) {

    return this.httpClient.get(`${baseUrl}/direccion/direccion/${id}`)

  }

  saveDireccion(direccion:any) {

    return this.httpClient.post(`${baseUrl}/direccion/direccion`, direccion)

  }

  updateDireccion(id:number, direccion:any) {

    return this.httpClient.put(`${baseUrl}/direccion/direccion/${id}`, direccion)

  }

  deleteDireccion(id:number) {

    return this.httpClient.delete(`${baseUrl}/direccion/direccion/${id}`)

  }

  findProveedores() {

    return this.httpClient.get(`${baseUrl}/proveedor/proveedores`)

  }

  findProveedor(id:number) {

    return this.httpClient.get(`${baseUrl}/proveedor/proveedor/${id}`)

  }

  saveProveedor(proveedor:any) {

    return this.httpClient.post(`${baseUrl}/proveedor/proveedor`, proveedor)

  }

  updateProveedor(id:number, proveedor:any) {

    return this.httpClient.put(`${baseUrl}/proveedor/proveedor/${id}`, proveedor)

  }

  deleteProveedor(id:number) {

    return this.httpClient.delete(`${baseUrl}/proveedor/proveedor/${id}`)

  }

  findProductos() {

    return this.httpClient.get(`${baseUrl}/producto/productos`)

  }

  findProducto(id : number) {

    return this.httpClient.get(`${baseUrl}/producto/producto/${id}`)

  }

  saveProducto(producto : any) {

    return this.httpClient.post(`${baseUrl}/producto/producto`, producto)

  }

  updateProducto(id : number, producto : any) {

    return this.httpClient.put(`${baseUrl}/producto/producto/${id}`, producto)

  }

  deleteProducto(id : number) {

    return this.httpClient.delete(`${baseUrl}/producto/producto/${id}`)

  }

}
