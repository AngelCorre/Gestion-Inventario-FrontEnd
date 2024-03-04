import { Component } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-direccion',
  templateUrl: './registrar-direccion.component.html',
  styleUrl: './registrar-direccion.component.css'
})
export class RegistrarDireccionComponent {

  direccion : any;

  constructor(private inventarioService : InventarioService, private router : Router) { }

  onSubmit() {

    this.inventarioService.saveDireccion(this.direccion).subscribe( data => {

      swal(

        'Direccion registrada',
        'La direccion a sido registrada',
        'success'

      );

      this.redirect();

    });

  }

  redirect() {

    this.router.navigate(['listaDirecciones']);

  }

}
