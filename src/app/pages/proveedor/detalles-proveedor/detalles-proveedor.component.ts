import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-proveedor',
  templateUrl: './detalles-proveedor.component.html',
  styleUrl: './detalles-proveedor.component.css'
})
export class DetallesProveedorComponent implements OnInit{

  proveedor : any;

  id:number;

  constructor(private inventarioService : InventarioService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.inventarioService.findProveedor(this.id).subscribe(data => {

      this.proveedor = data;

    })

  }

}
