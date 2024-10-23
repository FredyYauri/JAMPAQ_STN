using Microsoft.Extensions.Configuration;
using STN.Data.RRHH;
using STN.Entitie.RRHH;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Bussiness.RRHH
{
    public class BSEmpleado
    {
        private ApplicationDbContext context;
        private IConfiguration configuration;
        public BSEmpleado(ApplicationDbContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }
        public int CrearEmpleado(DTOEmpleadoCreate obj)
        {
            var daEmpleado = new DAEmpleado(context);
            string storedProcedure = configuration["StoredProcedures:RegistrarEmpleado"];
            int resultado = daEmpleado.fn_CrearEmpleado(storedProcedure, obj);
            return resultado;
        }
    }
}
