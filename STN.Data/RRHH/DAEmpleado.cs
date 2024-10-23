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
    public class DAEmpleado
    {
        private ApplicationDbContext _context;
        public DAEmpleado(ApplicationDbContext context)
        {
            _context = context;
        }

        public int fn_CrearEmpleado(string store, DTOEmpleadoCreate obj)
        {
            SqlConnection oSqlConnection = null;

            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IDCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@IdPersona", obj.IdPersona);
                cm.Parameters.AddWithValue("@FechaIngreso", obj.FechaIngreso);
                cm.Parameters.AddWithValue("@IDArea", obj.IdArea);
                cm.Parameters.AddWithValue("@IDCargo", obj.IdCargo);
                cm.Parameters.AddWithValue("@CantHijos", obj.CantHijos);
                cm.Parameters.AddWithValue("@TipoContrato", obj.TipoContrato);
                cm.Parameters.AddWithValue("@SueldoBasico", obj.SueldoBasico);
                cm.Parameters.AddWithValue("@PersonaContacto", obj.PersonaContacto);
                cm.Parameters.AddWithValue("@NumeroContacto", obj.NumeroContacto);
                cm.Parameters.AddWithValue("@BancoConsignacion", obj.BancoConsignacion);
                cm.Parameters.AddWithValue("@NumeroCuenta", obj.NumeroCuenta);
                cm.Parameters.AddWithValue("@NumeroCuentaCCI", obj.NumeroCuentaCCI);
                cm.Parameters.AddWithValue("@TipoComprobante", obj.TipoComprobante);
                cm.Parameters.AddWithValue("@TipoAFP", obj.TipoAFP);
                cm.Parameters.AddWithValue("@NumeroCuentaAFP", obj.NumeroCuentaAFP);
                cm.Parameters.AddWithValue("@UsuarioRegistro", obj.UsuarioRegistro);
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
