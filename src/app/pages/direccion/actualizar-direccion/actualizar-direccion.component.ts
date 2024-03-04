import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-direccion',
  templateUrl: './actualizar-direccion.component.html',
  styleUrl: './actualizar-direccion.component.css'
})
export class ActualizarDireccionComponent implements OnInit{

  id : number;
  direccion : any;

  constructor(private inventarioService : InventarioService, private route : ActivatedRoute, private router : Router) { }
  
  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];
    this.inventarioService.findDireccion(this.id).subscribe( data => {

      this.direccion = data;

    });



  }

  onSubmit() {

    swal({

      title: '¿Estas seguro?',
      text: 'Confirma si deseas actualizar la direccion',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true
    }).then((result) => {

      if (result.value) {

        this.inventarioService.updateDireccion(this.id, this.direccion).subscribe((data) => {

          swal(
            'Direccion Actualizada',
            'La direccion ha sido actualizada',
            'success'
          );

          this.redirect();

        })
        
      }

    });

  }

  redirect() {

    this.router.navigate(['listaDirecciones']);

  }

}
