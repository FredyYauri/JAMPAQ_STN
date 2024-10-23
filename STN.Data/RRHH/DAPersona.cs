using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using STN.Entitie.RRHH;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Data.RRHH
{
    public class DAPersona
    {
        private ApplicationDbContext _context;

        public DAPersona(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<DTOPersonaGet> fn_ObtenerPersonas(string storedProcedure, int iDCompania)
        {
            SqlConnection oSqlConnection = null;            
            List<DTOPersonaGet> listResponse = new List<DTOPersonaGet>();
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
                        DTOPersonaGet response = new DTOPersonaGet();
                        response.IdPersona = Convert.ToInt32(dr["Id"]);
                        response.TipoTrabajador = dr["TipoTrabajador"].ToString() ?? "";
                        response.NombreCompleto = dr["NombreCompleto"].ToString() ?? "";
                        response.TipoDocumento = dr["TipoDocumento"].ToString() ?? "";
                        response.NumeroDocumento = dr["NumeroDocumento"].ToString() ?? "";
                        response.Sexo = dr["Sexo"].ToString() ?? "";
                        response.Telefono = dr["Telefono"].ToString() ?? "";
                        response.Email = dr["Email"].ToString() ?? "";
                        response.Estado = dr["Estado"].ToString() ?? "";
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
        public List<DTOPersonaRegister> fn_ObtenerPersona(string store, DTOPersona obj)
        {
            List<DTOPersonaRegister> listResponse = new List<DTOPersonaRegister>();
            SqlConnection oSqlConnection = null;
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@IdPersona", obj.IdPersona);
                SqlDataReader dr = cm.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        DTOPersonaRegister response = new DTOPersonaRegister();
                        response.IdPersona = Convert.ToInt32(dr["Id"]);
                        response.IdCompania = Convert.ToInt32(dr["IdCompania"]);
                        response.Nombre = dr["Nombre"].ToString() ?? "";
                        response.ApellidoPaterno = dr["ApellidoPaterno"].ToString() ?? "";
                        response.ApellidoMaterno = dr["ApellidoMaterno"].ToString() ?? "";
                        response.NombreCompleto = dr["NombreCompleto"].ToString() ?? "";
                        response.FechaNacimiento = Convert.ToDateTime(dr["FechaNacimiento"]);
                        response.IdTipoDocumento = Convert.ToInt32(dr["IdTipoDocumento"]);
                        response.TipoDocumento = dr["TipoDocumento"].ToString() ?? "";
                        response.NumeroDocumento = dr["NumeroDocumento"].ToString() ?? "";
                        response.IdEstadoCivil = Convert.ToInt32(dr["IdEstadoCivil"]);
                        response.EstadoCivil = dr["EstadoCivil"].ToString() ?? "";
                        response.IdSexo = Convert.ToInt32(dr["IdSexo"]);
                        response.Sexo = dr["Sexo"].ToString() ?? "";
                        response.Direccion = dr["Direccion"].ToString() ?? "";
                        response.Observacion = dr["Observacion"].ToString() ?? "";
                        response.UsuarioRegistro = Convert.ToInt32(dr["UsuarioRegistro"]);
                        response.FechaRegistro = Convert.ToDateTime(dr["FechaRegistro"]);
                        response.Estado = Convert.ToBoolean(dr["Estado"]);
                        response.Ubigeo = dr["Ubigeo"].ToString() ?? "";
                        response.Email = dr["Email"].ToString() ?? "";
                        response.Telefono = dr["Telefono"].ToString() ?? "";
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
        public int fn_CrearPersona(string store, DTOPersonaCreate obj)
        {
            SqlConnection oSqlConnection = null;

            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@Nombre", obj.Nombre);
                cm.Parameters.AddWithValue("@ApellidoPaterno", obj.ApellidoPaterno);
                cm.Parameters.AddWithValue("@ApellidoMaterno", obj.ApellidoMaterno);
                cm.Parameters.AddWithValue("@FechaNacimiento", obj.FechaNacimiento);
                cm.Parameters.AddWithValue("@IDTipoDocumento", obj.IdTipoDocumento);
                cm.Parameters.AddWithValue("@NumeroDocumento", obj.NumeroDocumento);
                cm.Parameters.AddWithValue("@IDEstadoCivil", obj.IdEstadoCivil);
                cm.Parameters.AddWithValue("@IDSexo", obj.IdSexo);
                cm.Parameters.AddWithValue("@Direccion", obj.Direccion);
                cm.Parameters.AddWithValue("@Observacion", obj.Observacion);
                cm.Parameters.AddWithValue("@UsuarioRegistro", obj.UsuarioRegistro);
                cm.Parameters.AddWithValue("@Email", obj.Email);
                cm.Parameters.AddWithValue("@Telefono", obj.Telefono);
                cm.Parameters.AddWithValue("@Ubigeo", obj.Ubigeo);
                int rpta = cm.ExecuteNonQuery();
                return rpta;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        public int fn_ActualizarPersona(string store, DTOPersonaUpdate obj)
        {
            SqlConnection oSqlConnection = null;
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@Id", obj.IdPersona);
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@Nombre", obj.Nombre);
                cm.Parameters.AddWithValue("@ApellidoPaterno", obj.ApellidoPaterno);
                cm.Parameters.AddWithValue("@ApellidoMaterno", obj.ApellidoMaterno);
                cm.Parameters.AddWithValue("@FechaNacimiento", obj.FechaNacimiento);
                cm.Parameters.AddWithValue("@IDTipoDocumento", obj.IdTipoDocumento);
                cm.Parameters.AddWithValue("@NumeroDocumento", obj.NumeroDocumento);
                cm.Parameters.AddWithValue("@IDEstadoCivil", obj.IdEstadoCivil);
                cm.Parameters.AddWithValue("@IDSexo", obj.IdSexo);                
                cm.Parameters.AddWithValue("@Direccion", obj.Direccion);
                cm.Parameters.AddWithValue("@Observacion", obj.Observacion);
                cm.Parameters.AddWithValue("@UsuarioRegistro", obj.UsuarioRegistro);
                cm.Parameters.AddWithValue("@Email", obj.Email);
                cm.Parameters.AddWithValue("@Telefono", obj.Telefono);
                cm.Parameters.AddWithValue("@Ubigeo", obj.Ubigeo);
                int rpta = cm.ExecuteNonQuery();
                return rpta;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        public int fn_EliminarPersona(string store, DTOPersona obj)
        {
            SqlConnection oSqlConnection = null;
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@IdPersona", obj.IdPersona);
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
