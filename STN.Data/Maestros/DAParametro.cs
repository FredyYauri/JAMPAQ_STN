using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using STN.Entitie.Equipo;
using STN.Entitie.Maestro;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Data.Maestros
{
    public class DAParametro
    {
        private ApplicationDbContext _context;
        public DAParametro(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<DTOParametro> fn_ObtenerParametros(string storedProcedure, string tabla)
        {
            SqlConnection oSqlConnection = null;           
            List<DTOParametro> listResponse = new List<DTOParametro>();
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(storedProcedure, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@Tabla", tabla);
                SqlDataReader dr = cm.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        DTOParametro response = new DTOParametro();
                        response.Id = Convert.ToInt32(dr["Id"]);
                        response.Descripcion = dr["Descripcion"].ToString() ?? "";
                        listResponse.Add(response);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return listResponse;
        }
    }
}
