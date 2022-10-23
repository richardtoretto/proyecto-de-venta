// importar para resgistar y consultada datas
import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//url global.ts
import { global } from "./global";

@Injectable()
export class PedidosService{
public url:string;

    constructor(
    public _http:HttpClient
    
    ){  
        this.url=global.url;
    }



    // REGISTRAR PEDIDO
    Agregar_pedido(pedido:any): Observable<any>{
     let json = pedido  
     return this._http.post(this.url+'api/pedidos',json);
    }


   // CONSULTAR  PEDIDO
    consultar_pedido(cedula:any): Observable<any>{
    return this._http.get(this.url+'api/pedidos/'+cedula);
    }


    // ACTUALIZAR PEDIDO
    update_pedido(data:any): Observable<any>{
    let json = data  
    return this._http.put(this.url+'api/pedidos/',json);
    }


     // ELIMINAR PEDIDO
    delete_pedido(id:any): Observable<any>{
    return this._http.delete(this.url+'api/pedidos/'+id);
    }



}
