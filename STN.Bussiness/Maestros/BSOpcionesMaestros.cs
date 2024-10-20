using Microsoft.Extensions.Configuration;
using STN.Data.Maestros;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Bussiness.Maestros
{
    public class BSOpcionesMaestros
    {
        private ApplicationDbContext context;
        private readonly IConfiguration _configuration;
        public BSOpcionesMaestros(ApplicationDbContext context, IConfiguration configuration)
        {
            this.context = context;
            _configuration = configuration;
        }

        public DataTable ObtenerTipoProducto()
        {
            var daOpcionesMaestros = new DAOpcionesMaestros(context);
            string storedProcedure = _configuration["StoredProcedures:TipoProducto"];
            return daOpcionesMaestros.ObtenerTipoProducto(storedProcedure);
        }

        public DataTable ObtenerMarca(String IDCompania)
        {
            var daOpcionesMaestros = new DAOpcionesMaestros(context);
            string storedProcedure = _configuration["StoredProcedures:Marca"];
            return daOpcionesMaestros.fn_ObtenerMarca(storedProcedure, IDCompania);
        }

        public DataTable ObtenerUnidadMedida(String IDCompania)
        {
            var daOpcionesMaestros = new DAOpcionesMaestros(context);
            string storedProcedure = _configuration["StoredProcedures:UnidadMedida"];
            return daOpcionesMaestros.fn_ObtenerUnidadMedida(storedProcedure, IDCompania);
        }
    }
}
