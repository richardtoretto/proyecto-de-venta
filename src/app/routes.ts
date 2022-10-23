"// IMPORTER NECESARIOS"
    import { ModuleWithProviders } from "@angular/core";
    import {Routes, RouterModule} from "@angular/router";

    // IMPORTAR COMPONENTES QUE SON LAS VISTAS
    import { AppComponent } from './app.component';
    import { PedidosComponent } from './component/pedidos/pedidos.component';
    import { HomeComponent } from './component/home/home.component';

    const appRoutes: Routes =[
        //{path:'home',component:AppComponent},
        {path:'home',component:HomeComponent},
        {path:'pedidos',component:PedidosComponent},
           
   
    ];

    export const appRoutingProviders: any[]=[];
    export const Routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
