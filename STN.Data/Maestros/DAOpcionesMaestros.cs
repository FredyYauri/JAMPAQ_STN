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

        public DataTable fn_ObtenerClaseProducto(string v)
        {
            SqlHelper helper = new SqlHelper(context);
            return helper.fn_ObtenerResultadoValue(v);
        }

        public DataTable fn_ObtenerUnidadMedida(string v, string iDCompania)
        {
            SqlHelper helper = new SqlHelper(context);
            return helper.fn_ObtenerResultadoValue(v, iDCompania);
        }
    }
}
