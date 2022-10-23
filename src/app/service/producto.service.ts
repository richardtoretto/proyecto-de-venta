// importar para resgistar y consultada datas
import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//url global.ts
import { global } from "./global";

@Injectable()
export class ProductoService{
public url:string;

    constructor(
    public _http:HttpClient
    
    ){  
        this.url=global.url;
    }


    // ALL PRODUCTOS
    consulta_prod():Observable<any>{    
    return this._http.get(this.url+'api/productos');      
   }


    // FIND PRODUCTOS
    producto_id(id:any):Observable<any>{    
    return this._http.get(this.url+'api/productos/'+id);      
    }
    




}