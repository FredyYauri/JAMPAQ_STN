using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using STN.Entitie.Equipo;
using STN.Entitie.Producto;
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

        public List<DTOEquipoGet> fn_ObtenerEquipos(string storedProcedure, int iDCompania)
        {
            SqlConnection oSqlConnection = null;
            DTOEquipoGet response = new DTOEquipoGet();
            List<DTOEquipoGet> listResponse = new List<DTOEquipoGet>();
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
        public List<DTOEquipoRegister> fn_ObtenerEquipo(string store, DTOEquipo obj)
        {
            List<DTOEquipoRegister> listResponse = new List<DTOEquipoRegister>();
            SqlConnection oSqlConnection = null;
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@IdEquipo", obj.IdEquipo);
                SqlDataReader dr = cm.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        DTOEquipoRegister response = new DTOEquipoRegister();
                        response.IdEquipo = Convert.ToInt32(dr["Id"]);
                        response.IdCompania = Convert.ToInt32(dr["IdCompania"]);
                        response.Codigo = dr["Codigo"].ToString() ?? "";
                        response.Descripcion = dr["Descripcion"].ToString() ?? "";
                        response.Marca = dr["Marca"].ToString() ?? "";
                        response.Modelo = dr["Modelo"].ToString() ?? "";
                        response.Serie = dr["Serie"].ToString() ?? "";
                        response.TipoControl = Convert.ToInt32(dr["TipoControl"]);
                        response.Valor = Convert.ToDecimal(dr["Valor"]);
                        response.TipoMantenimiento = Convert.ToInt32(dr["TipoMantenimiento"]);
                        response.TipoMantenimientoDescripcion = dr["TipoMantenimientoDescripcion"].ToString() ?? "";
                        response.TipoControlDescripcion = dr["TipoControlDescripcion"].ToString() ?? "";
                        response.Observaciones = dr["Observaciones"].ToString() ?? "";
                        response.ImporteMN = Convert.ToDecimal(dr["ImporteMN"]);
                        response.Estado = Convert.ToBoolean(dr["Estado"]);
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
        public int fn_CrearEquipo(string store, DTOEquipoCreate obj)
        {
            SqlConnection oSqlConnection = null;

            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@Descripcion", obj.Descripcion);
                cm.Parameters.AddWithValue("@Marca", obj.Marca);
                cm.Parameters.AddWithValue("@Modelo", obj.Modelo);
                cm.Parameters.AddWithValue("@Serie", obj.Serie);
                cm.Parameters.AddWithValue("@TipoControl", obj.TipoControl);
                cm.Parameters.AddWithValue("@Valor", obj.Valor);
                cm.Parameters.AddWithValue("@TipoMantenimiento", obj.TipoMantenimiento);
                cm.Parameters.AddWithValue("@Observaciones", obj.Observaciones);
                cm.Parameters.AddWithValue("@ImporteMN", obj.ImporteMN);
                cm.Parameters.AddWithValue("@Usuario", obj.Usuario);
                int rpta = cm.ExecuteNonQuery();
                return rpta;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        public int fn_ActualizarEquipo(string store, DTOEquipoUpdate obj)
        {
            SqlConnection oSqlConnection = null;
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@Id", obj.IdEquipo);
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@Descripcion", obj.Descripcion);
                cm.Parameters.AddWithValue("@Marca", obj.Marca);
                cm.Parameters.AddWithValue("@Modelo", obj.Modelo);
                cm.Parameters.AddWithValue("@Serie", obj.Serie);
                cm.Parameters.AddWithValue("@TipoControl", obj.TipoControl);
                cm.Parameters.AddWithValue("@Valor", obj.Valor);
                cm.Parameters.AddWithValue("@TipoMantenimiento", obj.TipoMantenimiento);
                cm.Parameters.AddWithValue("@Observaciones", obj.Observaciones);
                cm.Parameters.AddWithValue("@ImporteMN", obj.ImporteMN);
                cm.Parameters.AddWithValue("@Usuario", obj.Usuario);
                int rpta = cm.ExecuteNonQuery();
                return rpta;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        public int fn_EliminarEquipo(string store, DTOEquipo obj)
        {
            SqlConnection oSqlConnection = null;
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@IdEquipo", obj.IdEquipo);
                cm.ExecuteNonQuery();
                int rpta = cm.ExecuteNonQuery();
                return rpta;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
    }
}
