import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-direccion-lista',
  templateUrl: './direccion-lista.component.html',
  styleUrl: './direccion-lista.component.css'
})
export class DireccionListaComponent implements OnInit {

  direcciones : any = []

  constructor(private inventarioService:InventarioService, private router : Router) { }

  ngOnInit(): void {

    this.findDirecciones();

  }

  private findDirecciones() {

    this.inventarioService.findDirecciones().subscribe(data => {

      this.direcciones = data;

    });

  }

  updateDireccion(id:String) {

    this.router.navigate(['updateDireccion', id]);

  }

  deleteDireccion(id:String) {

    swal ({

      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la direccion',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true

    }).then((result) => {

      if (result.value) {

        this.inventarioService.deleteDireccion(Number(id)).subscribe( data => {

          swal(
            'Dirección Eliminada',
            'La dirección ha sido eliminada',
            'success'
            );

            this.findDirecciones();
    
        });
        
      }

    });

  }

  detailsDireccion(id:String) {

    this.router.navigate(['detailsDireccion', id])

  }

  toregister() {

    this.router.navigate(['registerDireccion'])

  }


}
