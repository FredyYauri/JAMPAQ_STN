using Microsoft.Extensions.Configuration;
using STN.Data.Equipo;
using STN.Data.Maestros;
using STN.Entitie.Equipo;
using STN.Entitie.Maestro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Bussiness.Maestros
{
    public class BSParametro
    {
        private ApplicationDbContext context;
        private IConfiguration configuration;

        public BSParametro(ApplicationDbContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }
        public List<DTOParametro> ObtenerParametros(string tabla)
        {
            var daParametro = new DAParametro(context);
            string storedProcedure = configuration["StoredProcedures:Parametros"];
            return daParametro.fn_ObtenerParametros(storedProcedure, tabla);
        }
    }
}
