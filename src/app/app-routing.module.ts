import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarDireccionComponent } from './pages/direccion/registrar-direccion/registrar-direccion.component';
import { DireccionListaComponent } from './pages/direccion/direccion-lista/direccion-lista.component';
import { ActualizarDireccionComponent } from './pages/direccion/actualizar-direccion/actualizar-direccion.component';
import { DetallesDireccionComponent } from './pages/direccion/detalles-direccion/detalles-direccion.component';
import { ProductosListaComponent } from './pages/producto/productos-lista/productos-lista.component';
import { ProveedoresListaComponent } from './pages/proveedor/proveedores-lista/proveedores-lista.component';
import { RegistrarProveedorComponent } from './pages/proveedor/registrar-proveedor/registrar-proveedor.component';
import { ActualizarProveedorComponent } from './pages/proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { DetallesProveedorComponent } from './pages/proveedor/detalles-proveedor/detalles-proveedor.component';
import { RegistrarProductoComponent } from './pages/producto/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './pages/producto/actualizar-producto/actualizar-producto.component';
import { DetallesProductoComponent } from './pages/producto/detalles-producto/detalles-producto.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'listaProductos', component:ProductosListaComponent},
  {path: 'listaProveedores', component:ProveedoresListaComponent},
  {path: 'listaDirecciones', component:DireccionListaComponent},
  {path: 'updateDireccion/:id', component:ActualizarDireccionComponent},
  {path: 'detailsDireccion/:id', component:DetallesDireccionComponent},
  {path: 'registerDireccion', component:RegistrarDireccionComponent},
  {path: 'registerProveedor', component:RegistrarProveedorComponent},
  {path: 'updateProveedor/:id', component:ActualizarProveedorComponent},
  {path: 'detailsProveedor/:id', component:DetallesProveedorComponent},
  {path: 'registerProducto', component:RegistrarProductoComponent},
  {path: 'updateProducto/:id', component:ActualizarProductoComponent},
  {path: 'detailsProducto/:id', component:DetallesProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
