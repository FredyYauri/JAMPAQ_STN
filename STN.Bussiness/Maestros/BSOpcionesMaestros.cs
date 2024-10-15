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

        public BSOpcionesMaestros(ApplicationDbContext context)
        {
            this.context = context;
        }

        public DataTable ObtenerClaseProducto()
        {
            var daOpcionesMaestros = new DAOpcionesMaestros(context);
            return daOpcionesMaestros.fn_ObtenerClaseProducto("Produccion.Pa_Pro_ClaseProducto_Listar");
        }

        public DataTable ObtenerUnidadMedida(String IDCompania)
        {
            var daOpcionesMaestros = new DAOpcionesMaestros(context);
            return daOpcionesMaestros.fn_ObtenerUnidadMedida("Produccion.Pa_Listar_UnidadMedida", IDCompania);
        }
    }
}
