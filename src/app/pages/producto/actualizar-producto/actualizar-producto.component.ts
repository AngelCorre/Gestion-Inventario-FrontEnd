import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent implements OnInit{

  id : number;

  producto : any;

  constructor(private inventarioService : InventarioService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.findProducto(this.id);

  }

  findProducto(id : number) {

    this.inventarioService.findProducto(id).subscribe(data => {

      this.producto = data;

    });

  }

  onUpdate() {

    swal({

      title: '¿Estas seguro?',
      text: 'Confirma si deseas actualizar el producto',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true
    }).then((result) => {

      if (result.value) {

        this.inventarioService.updateProducto(this.id, this.producto).subscribe(data => {

          swal(

            'Producto Actualizado',
            'El producto ha sido actualizado',
            'success'

          );

          this.redirect();

        });
        
      }

    });

  }

  redirect() {

    this.router.navigate(['listaProductos'])

  }

}
