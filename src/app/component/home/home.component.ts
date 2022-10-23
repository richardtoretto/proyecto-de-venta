import { Component, OnInit } from '@angular/core';
import { provideRoutes, Router, ActivatedRoute, } from '@angular/router';
import { pedido } from 'src/app/Models/pedido';
import { ProductoService } from '../../service/producto.service';
import { PedidosService } from '../../service/pedidos.service';
import { global } from '../../service/global';
import Swal from 'sweetalert2';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductoService , PedidosService],
})

export class HomeComponent implements OnInit {
  public pedidos:pedido;
  public lista:any;
  public url:any;
  public registrar:any;
  public respuesta:any;
  public usuario:any;
  public direccion:any;
  public fecha:any;
  public totalpedidos:any;
  public data:any;

  constructor(
    public _router:Router,
    public _service:ProductoService,
    public _service_pedido:PedidosService,
    private _route:ActivatedRoute,
  
  ) { 
    
    this.pedidos= new pedido(1,'','','','','','','','');
    this.lista_productos();

   
  }


  
  ngOnInit(): void {
   

  }




  lista_productos(){   
    this._service.consulta_prod().subscribe(
      Response=>{
      this.lista = Response
      this.url = global.url+"image/"
      console.log(this.url)
      })
  }




  agregar_pedido(prods:any){

    this.data="";
    this.usuario= localStorage.getItem("documento");
    this.direccion= localStorage.getItem("direccion");


    if(this.usuario){

      this.registrar = prods;  


      this._service_pedido.consultar_pedido(this.usuario).subscribe(
        response => {
        
          for(let item of response){

            if(item.id_producto == this.registrar.id){         
              this.data = item.id_producto  
              break      
            }
          
          }  

      
          setTimeout(() => {   

            if(!this.data){
              this.insert_pedido();            
            }else{

              Swal.fire({
                icon: 'warning',
                title: 'Este producto ya fue agregado.',
                showConfirmButton: false,
                timer: 2000});
        
            }
        
            }, 500)
         
        });
      

    }else{


      Swal.fire({
        icon: 'info',
        title: 'Inicie sesión, para agregar productos.',
        showConfirmButton: false,
        timer: 2000});

    }

  }





  insert_pedido(){
  this.fecha = new Date;

  this.pedidos = new pedido (
   1,
   this.registrar.id,
   this.registrar.producto,
   '1',
   this.registrar.precio,
   this.registrar.precio,
   this.usuario,
   this.direccion,
   this.fecha.toLocaleDateString(),
  );

  this._service_pedido.Agregar_pedido(this.pedidos).subscribe(
  Response=>{
  this.respuesta = Response
  console.log(this.respuesta)
  })

  Swal.fire({
    icon: 'success',
    title: 'Producto agregado a tus pedidos.',
    showConfirmButton: false,
    timer: 2000});


  setTimeout(() => {  
  location.reload() 
  },2200);


 }





 
 }












