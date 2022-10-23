import { Component,OnInit,DoCheck } from '@angular/core';
import { PedidosService } from './service/pedidos.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PedidosService],

})
export class AppComponent {
 public usuario:any;
 public direccion:any;
 public totalpedidos:any;


  constructor(
    public _service_pedido:PedidosService,

  ) { 

  
  }
  
  
  ngOnInit(){
    this.consultar_pedidos();
  }


  ngDoCheck(){
    this.usuario= localStorage.getItem("documento");
    this.direccion= localStorage.getItem("direccion");
  }



  cerrar_session(){
    localStorage.removeItem("documento");
    localStorage.removeItem("direccion");
    this.consultar_pedidos();
   
  }


  Registrar_usuario(documento:any,direccion:any,Formsesion:any){

    localStorage.setItem("documento",documento.value);
    localStorage.setItem("direccion",direccion.value);
    Formsesion.reset();

    Swal.fire({
      icon: 'success',
      title: 'Bienvenido, ahora puedes agregar productos',
      showConfirmButton: false,
      timer: 2000});

      this.consultar_pedidos();
   
  }



  consultar_pedidos(){
    this.usuario=localStorage.getItem("documento")
    if (this.usuario){

      this._service_pedido.consultar_pedido(this.usuario).subscribe(
        Response=>{
         this.totalpedidos=Response.length
        });
    }
   
   }


}

