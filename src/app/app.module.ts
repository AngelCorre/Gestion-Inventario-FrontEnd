import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarDireccionComponent } from './pages/direccion/registrar-direccion/registrar-direccion.component';
import { ActualizarDireccionComponent } from './pages/direccion/actualizar-direccion/actualizar-direccion.component';
import { DetallesDireccionComponent } from './pages/direccion/detalles-direccion/detalles-direccion.component';
import { FormsModule } from '@angular/forms';
import { DireccionListaComponent } from './pages/direccion/direccion-lista/direccion-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedoresListaComponent } from './pages/proveedor/proveedores-lista/proveedores-lista.component';
import { RegistrarProveedorComponent } from './pages/proveedor/registrar-proveedor/registrar-proveedor.component';
import { ActualizarProveedorComponent } from './pages/proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { DetallesProveedorComponent } from './pages/proveedor/detalles-proveedor/detalles-proveedor.component';
import { DetallesProductoComponent } from './pages/producto/detalles-producto/detalles-producto.component';
import { ActualizarProductoComponent } from './pages/producto/actualizar-producto/actualizar-producto.component';
import { RegistrarProductoComponent } from './pages/producto/registrar-producto/registrar-producto.component';
import { ProductosListaComponent } from './pages/producto/productos-lista/productos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrarDireccionComponent,
    ActualizarDireccionComponent,
    DetallesDireccionComponent,
    DireccionListaComponent,
    ProveedoresListaComponent,
    RegistrarProveedorComponent,
    ActualizarProveedorComponent,
    DetallesProveedorComponent,
    DetallesProductoComponent,
    ActualizarProductoComponent,
    RegistrarProductoComponent,
    ProductosListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
