using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using STN.Data;
using STN.Data.Seguridad;

namespace STN.Bussiness.Seguridad
{
    public class BSUsuario
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public BSUsuario(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public DataTable ObtenerPerfil(string idUsuario, int IdCompania)
        {
            var daUsuario = new DAUsuario(_context);
            string storedProcedure = _configuration["StoredProcedures:PerfilUsuario"];
            return daUsuario.fn_ObtenerPerfil(storedProcedure, idUsuario, IdCompania);
        }

        public DataTable ValidarUsuario(String usu, String con, String emp)
        {
            var daUsuario = new DAUsuario(_context);
            string storedProcedure = _configuration["StoredProcedures:UsuarioValidar"];
            return daUsuario.ValidarUsuario(storedProcedure, usu, con, emp);
        }
    }
}
