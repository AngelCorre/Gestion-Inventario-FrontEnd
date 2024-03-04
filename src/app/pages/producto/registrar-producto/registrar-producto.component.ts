import { Component } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrl: './registrar-producto.component.css'
})
export class RegistrarProductoComponent {

  producto : any;

  constructor(private inventarioService : InventarioService, private router : Router) { }
 
  onSubmit() {

    this.inventarioService.saveProducto(this.producto).subscribe(data => {

      swal(
        'Producto registrado',
        'El producto ha sido registrado',
        'success'
      );

      this.redirect();

    });
    
  }

  redirect() {

    this.router.navigate(['listaProductos'])

  }

}
