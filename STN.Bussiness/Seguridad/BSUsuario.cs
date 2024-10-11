using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using STN.Data;
using STN.Data.Seguridad;

namespace STN.Bussiness.Seguridad
{
    public class BSUsuario
    {
        private readonly ApplicationDbContext _context;

        public BSUsuario(ApplicationDbContext context)
        {
            _context = context;
        }

        public DataTable ObtenerPerfil(string idUsuario)
        {
            var daUsuario = new DAUsuario(_context);
            return daUsuario.fn_ObtenerPerfil("Seguridad.Pa_PerfilUsuario_Listar", idUsuario);
        }

        public DataTable ObtenerResultado(String usu, String con, String emp)
        {
            var daUsuario = new DAUsuario(_context);
            return daUsuario.fn_ObtenerResultado("Seguridad.Pa_Usuario_Validar", usu, con, emp);
        }
    }
}
