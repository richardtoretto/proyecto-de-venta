using backend_venta.Models;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace backend_venta.Controllers
{
    public class PedidosController : ApiController
    {


        // consulta id * 
        public HttpResponseMessage Get(int id)
        {

            string query = @"
              SELECT *
              FROM dbo.pedidos
              WHERE cedula = '" + id + @"'  ";
           

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



        //insertar
        public string Post(Pedido ped)
        {
            try
            {

                string query = @"
              INSERT INTO  dbo.pedidos
              (id_producto,producto,cantidad,precio,total,cedula,direccion,created_at)
              VALUES('" + ped.id_producto + @"','" + ped.producto + @"','" + ped.cantidad + @"','" + ped.precio + @"','" + ped.total + @"'
              ,'" + ped.cedula + @"','" + ped.direccion + @"','" + ped.created_at + @"')";


                DataTable Table = new DataTable();
                using (var conn = new SqlConnection(Conexion.conexion))
                using (var cmd = new SqlCommand(query, conn))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(Table);
                    conn.Close();
                }


                return "Success";

            }
            catch (Exception)
            {

                return "Failed";
            }

        }


        //update     
        public string Put(Pedido ped) 
        {
            try
            {

             string query = @"
             UPDATE dbo.pedidos
             SET             
             cantidad = '" + ped.cantidad + @"',
             total = '" + ped.total + @"' 
             WHERE id = '" + ped.id + @"'
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

                return "Success";
            }
            catch (Exception)
            {
                return "Failed";
            }
        }



        // Delete
        public string Delete(int id)
            {

                try
                {
                    string query = @"
                    DELETE
                    FROM dbo.pedidos
                    WHERE id = '" + id + @"'  ";


                    DataTable Table = new DataTable();
                    using (var conn = new SqlConnection(Conexion.conexion))
                    using (var cmd = new SqlCommand(query, conn))
                    using (var da = new SqlDataAdapter(cmd))
                    {
                      cmd.CommandType = CommandType.Text;
                      da.Fill(Table);
                      conn.Close();
                    }


                    return "Success";

                }
                catch (Exception)
                {

                    return "Failed";
                }

            }


        

    }
}
