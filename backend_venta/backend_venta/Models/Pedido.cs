using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_venta.Models
{
    public class Pedido
    {

        public int id { get; set; }
        public string id_producto { get; set; }
        public string producto { get; set; }
        public string cantidad { get; set; }
        public string precio { get; set; }
        public string total { get; set; }
        public string cedula { get; set; }
        public string direccion { get; set; }
        public string created_at { get; set; }
  


    }
}