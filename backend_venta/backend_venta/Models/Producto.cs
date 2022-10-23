using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_venta.Models
{
    public class Producto
    {
       public int id { get; set; }
       public string producto { get; set; }
       public string precio { get; set; }
       public string imagen { get; set; }
     
    }
}