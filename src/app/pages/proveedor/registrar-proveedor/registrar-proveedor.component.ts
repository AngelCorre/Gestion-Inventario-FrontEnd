import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../service/inventario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrl: './registrar-proveedor.component.css'
})
export class RegistrarProveedorComponent implements OnInit{
  
  proveedor = {
    
    proveedor_descripcion: "",
    producto: {
      id:""
    },
    direccion: {
      id:""
    }
    
  }
  
  direcciones : any = [
    
  ]
  
  productos : any = [
    
  ]
  
  constructor(private inventarioService : InventarioService, private router : Router) { }
  ngOnInit(): void {
    
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
        
        this.inventarioService.saveProveedor(this.proveedor).subscribe((data) => {
          
          console.log(data);
          swal(
            'Proveedor registrado',
            'El proveedor ha sido registrado',
            'success'
            );
            
            this.proveedor = {
              
              proveedor_descripcion: '',
              producto: {
                id:''
              },
              direccion: {
                id:''
              }
              
            }
            
            this.redirect();
            
          }, (error) => {
            
            swal(
              'Error al registrar',
              'Direccion en uso',
              'error'
              );
              
            }
            )
            
          }
          
        });
        
      }
      
      redirect() {
        
        this.router.navigate(['listaProveedores'])
        
      }
      
      
    }
    