﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;


using System.Net.Http.Headers; // formato json
using System.Web.Http.Cors; // quitar bloqueos para ver apis en la web


namespace backend_venta
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web

            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );


            //--> obligatoria ver convertir a formato json en html
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            // --> obligatoria quitar bloqueos para ver apis en la web
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));


        }
    }
}
