import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent implements OnInit{

  id : number

  producto : any;

  constructor(private inventarioService : InventarioService, private route : ActivatedRoute) { }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    
    this.findProducto(this.id);

  }

  findProducto(id : number) {

    this.inventarioService.findProducto(id).subscribe(data => {

      this.producto = data;

    })

  }

}
