#BACKEND_VENTA

1.	Cargar el script Database.sql en servidor SQL SERVER, para la creación de tablas y el inserte de registros de productos.

2.	Cambiar la ruta de la nueva conexión de SQL SERVER en el Web.config

       <connectionStrings>
    
        <add name="connection" connectionString=
        "server=DESKTOP-VFKS56N;
         database=prueba;
         uid=sa;
         password=root;
         "/>  
         
      </connectionStrings>
    
3. iniciar servicio de backend con el archivo backend_venta.sln, tener instalado el programa de visual studio 2017 o mayor. 






#FRONTEND 

1.	Si la ruta del servidor del backend http://localhost:61959/ cambia, cambiar la ruta archivo del global.ts en el frontend, que se encuentra en la ruta:(          src\app\service\global.ts ).

2.	Para Iniciar server del proyecto de angular, abrir consola CMD ruta del proyecto>ng serve.

3.  iniciar en el navegador con http://localhost:4200/

