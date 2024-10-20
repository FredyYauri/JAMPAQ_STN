using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Data.Maestros
{
    public class DAOpcionesMaestros
    {
        private ApplicationDbContext context;

        public DAOpcionesMaestros(ApplicationDbContext context)
        {
            this.context = context;
        }

        public DataTable ObtenerTipoProducto(string v)
        {
            SqlHelper helper = new SqlHelper(context);
            return helper.fn_ObtenerResultadoValue(v);
        }

        public DataTable fn_ObtenerMarca(string v, string IdCompania)
        {
            SqlHelper helper = new SqlHelper(context);
            return helper.fn_ObtenerResultadoValue(v, IdCompania);
        }

        public DataTable fn_ObtenerUnidadMedida(string v, string IdCompania)
        {
            SqlHelper helper = new SqlHelper(context);
            return helper.fn_ObtenerResultadoValue(v, IdCompania);
        }
    }
}
