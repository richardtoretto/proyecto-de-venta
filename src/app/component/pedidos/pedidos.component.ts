
import { Component, OnInit } from '@angular/core';
import { provideRoutes, Router } from '@angular/router';
import { PedidosService } from '../../service/pedidos.service';
import { pedido } from 'src/app/Models/pedido';



@Component({
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers:[PedidosService],
})
export class PedidosComponent implements OnInit {
  public usuario:any;
  public direccion:any;
  public lista_pedidos:any;
  public pedidos:pedido;
  public data:any;

  public cant_productos:any;
  public subtotal:any;
  public total:any;
  
  constructor(
    public _router:Router,
    public _service_pedido:PedidosService,

  ) { 

  this.pedidos= new pedido(1,'','','','','','','','')
  this.consultar_pedidos();


  }

  
  ngOnInit(): void {
  }

  


  
  consultar_pedidos(){
    this.direccion = localStorage.getItem("direccion")
    this.usuario = localStorage.getItem("documento")


    if (this.usuario){

      this._service_pedido.consultar_pedido(this.usuario).subscribe(
        Response=>{
        this.lista_pedidos = Response;
        });


        setTimeout(() => {  
          this.resumen_pedido();
          },200);
    }
   
   
  
   }



   select_cantidad(item:any,cant:any){
    this.data = item.precio * cant.value
   
    this.pedidos = new pedido (
      item.id,
      '',
      '',
      cant.value,
      '',
      this.data,
      '',
      '',
      ''
     );

   this._service_pedido.update_pedido(this.pedidos).subscribe(
    Response=>{
      //console.log(Response);
   });


   setTimeout(() => {  
    location.reload() 
    },200);

  }





   Delete(item:any){
   this._service_pedido.delete_pedido(item).subscribe(
    Response=>{
    console.log(Response);
    });

    location.reload();
   }
  



   
   resumen_pedido(){

    let cant = 0
    let total = 0

    for(let item of this.lista_pedidos){
      cant += Number(item.cantidad)
      total += Number(item.total)
    }

      this.cant_productos = cant;
      this.subtotal = total;
      this.total = total;
  
    }

    


}
