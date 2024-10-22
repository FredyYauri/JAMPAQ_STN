using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using STN.Entitie.Equipo;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Data.Equipo
{
    public class DAEquipo
    {
        private ApplicationDbContext _context;

        public DAEquipo(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<DTOEquipo> fn_ObtenerEquipos(string storedProcedure, int iDCompania)
        {
            SqlConnection oSqlConnection = null;
            DTOEquipo response = new DTOEquipo();
            List<DTOEquipo> listResponse = new List<DTOEquipo>();
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(storedProcedure, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IDCompania", iDCompania);
                SqlDataReader dr = cm.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        response.Id = Convert.ToInt32(dr["Id"]);
                        response.Codigo = dr["Codigo"].ToString() ?? "";
                        response.Descripcion = dr["Descripcion"].ToString() ?? "";
                        response.Marca = dr["Marca"].ToString() ?? "";
                        response.Modelo = dr["Modelo"].ToString() ?? "";
                        response.Serie = dr["Serie"].ToString() ?? "";
                        response.Mantenimiento = dr["Mantenimiento"].ToString() ?? "";
                        response.Control = dr["Control"].ToString() ?? "";
                        response.Estado = dr["Estado"].ToString() ?? "";
                        listResponse.Add(response);
                    }
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return listResponse;
        }
    }
}
