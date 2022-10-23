import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import{HttpClientModule} from '@angular/common/http'; 

import{Routing,appRoutingProviders} from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders // COLOCAR
  ],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
