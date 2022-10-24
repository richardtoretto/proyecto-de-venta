#BACKEND_VENTA CSHARP

1.	en la carpeta backend_venta se encuentra el script Database.sql, para la creación de tablas y el inserte de registros de productos en servidor SQL SERVER.

2.	Cambiar la ruta de la nueva conexión de SQL SERVER en el Web.config

       <connectionStrings>
    
        <add name="connection" connectionString=
        "server=DESKTOP-VFKS56N;
         database=prueba;
         uid=sa;
         password=root;
         "/>        
      </connectionStrings>     
3. iniciar servicio de backend con el archivo backend_venta.sln, tener instalado el programa de visual studio C# 2017 o mayor. 






#FRONTEND ANGULAR

1.Frontend son todos los archivos, menos la carpeta que se llama backend.

2. Si la ruta del servidor del backend http://localhost:61959/ cambia, cambiar la ruta en el archivo del global.ts en el frontend, que se encuentra en la ruta:(          src\app\service\global.ts ).

3.	Para Iniciar server del proyecto de angular, abrir consola CMD ruta del proyecto>ng serve.

4.  iniciar en el navegador con http://localhost:4200/

