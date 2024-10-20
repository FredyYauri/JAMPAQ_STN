using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Data.Seguridad
{
    public class DAUsuario
    {
        private readonly ApplicationDbContext _context;
        public DAUsuario(ApplicationDbContext context)
        {
            _context = context;
        }

        public DataTable fn_ObtenerPerfil(string store, string idUsuario, int IdCompania)
        {
            DataTable dtResultado = new DataTable();
            try
            {
                SqlHelper helper = new SqlHelper(_context);
                dtResultado = helper.fn_ObtenerResultado(store, idUsuario, IdCompania);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dtResultado;
        }

        public DataTable ValidarUsuario(string pStoreProcedure, params object[] pParametros)
        {
            DataTable dtResultado = new DataTable();
            try
            {          
                SqlHelper helper = new SqlHelper(_context);
                dtResultado = helper.fn_ObtenerResultado(pStoreProcedure, pParametros);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dtResultado;
        }
    }
}
