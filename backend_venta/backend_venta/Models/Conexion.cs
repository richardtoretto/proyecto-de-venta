using System.Configuration;


namespace backend_venta.Models
{
    public class Conexion
    {

        public static string conexion = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;


    }
}