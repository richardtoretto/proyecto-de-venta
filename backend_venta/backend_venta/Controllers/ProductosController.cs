using backend_venta.Models;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace backend_venta.Controllers
{


    public class ProductosController : ApiController
    {

        // consulta all * 
        public HttpResponseMessage Get()
        {

            string query = @"
              SELECT *
              FROM dbo.productos
                ";

            DataTable Table = new DataTable();
            using (var conn = new SqlConnection(Conexion.conexion))
            using (var cmd = new SqlCommand(query, conn))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(Table);
                conn.Close();
            }

            return Request.CreateResponse(HttpStatusCode.OK, Table);

        }




    }

}
