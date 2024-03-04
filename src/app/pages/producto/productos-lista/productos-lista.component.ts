import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.css'
})
export class ProductosListaComponent implements OnInit{

  constructor(private inventarioService : InventarioService, private router : Router) { }

  ngOnInit(): void {
    
    this.findProductos();

  }

  productos : any = [];


  findProductos() {

    this.inventarioService.findProductos().subscribe(data => {

      this.productos = data;

    });

  }

  deleteProducto(id : number) {

    swal ({

      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar el producto',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true

    }).then((result) => {

      if (result.value) {

        this.inventarioService.deleteProducto(id).subscribe( data => {
    
          swal(
            'Producto Eliminado',
            'El producto ha sido eliminado',
            'success'
            );

          this.findProductos();

        });
        
      }

    });

  }

  updateProducto(id : number) {

    this.router.navigate(['updateProducto',id])

  }

  detailsProducto(id: number) {

    this.router.navigate(['detailsProducto',id])

  }

  toregister() {

    this.router.navigate(['registerProducto'])

  }



}
