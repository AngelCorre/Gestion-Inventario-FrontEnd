import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrl: './actualizar-proveedor.component.css'
})
export class ActualizarProveedorComponent implements OnInit{
  
  proveedor:any;

  direcciones : any = [

  ]

  productos : any = [

    
  ]

  id : number;
  
  constructor(private inventarioService : InventarioService, private router : Router, private route : ActivatedRoute) { }
  
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.inventarioService.findProveedor(this.id).subscribe(data => {

      this.proveedor = data;

    })

    this.inventarioService.findDirecciones().subscribe(data => {

      this.direcciones = data;

    })

    this.inventarioService.findProductos().subscribe(data => {

      this.productos = data;

    })

  }
  
  onSubmit() {

    swal({

      title: '¿Estas seguro?',
      text: 'Confirma si deseas actualizar el proveedor',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true
    }).then((result) => {

      if (result.value) {

        this.inventarioService.updateProveedor(this.id, this.proveedor).subscribe((data) => {

          swal(
            'Proveedor Actualizado',
            'El proveedor ha sido actualizado',
            'success'
          );

          this.redirect();

        }, (error) => {

          swal(
            'Error al actualizar',
            'Direccion en uso',
            'error'
          );

        });
        
      }

    });
    
  }


  redirect() {

    this.router.navigate(['listaProveedores']);

  }
  
}
