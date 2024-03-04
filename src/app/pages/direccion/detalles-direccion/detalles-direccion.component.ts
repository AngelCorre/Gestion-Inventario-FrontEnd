import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-direccion',
  templateUrl: './detalles-direccion.component.html',
  styleUrl: './detalles-direccion.component.css'
})
export class DetallesDireccionComponent implements OnInit{
  
  id:number;
  direccion : any;

  constructor(private inventarioService : InventarioService, private route : ActivatedRoute) {}
  
  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];

    this.inventarioService.findDireccion(this.id).subscribe(data => {

      this.direccion = data;

    });

  }

}
