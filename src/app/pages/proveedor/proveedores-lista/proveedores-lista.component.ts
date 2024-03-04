import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores-lista',
  templateUrl: './proveedores-lista.component.html',
  styleUrl: './proveedores-lista.component.css'
})
export class ProveedoresListaComponent implements OnInit{
  
  proveedores : any = [
    
  ];  
  
  constructor(private inventarioService:InventarioService, private router:Router) { }
  
  ngOnInit(): void {
    
    this.findProveedores();
    
  }
  
  findProveedores() {
    
    this.inventarioService.findProveedores().subscribe(data => {
      
      this.proveedores = data;
      
    })
    
  }
  
  deleteProveedor(id : number) {
    
    swal({
      
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar al proveedor',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmo',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'd33',
      buttonsStyling: true
      
    }).then((result) => {
      
      if (result.value) {
        
        this.inventarioService.deleteProveedor(id).subscribe(data => {

          swal(
            'Proveedor Eliminado',
            'El proveedor ha sido eliminado',
            'success'
            );

          this.findProveedores();

        })
        
      }
      
      
    })
    
  }
  
  toregister() {
    
    this.router.navigate(['registerProveedor']);
    
  }

  updateProveedor(id:number) {

    this.router.navigate(['updateProveedor', id]);

  }

  detailsProveedor(id:number) {

    this.router.navigate(['detailsProveedor', id]);

  }
  
  
  
}
