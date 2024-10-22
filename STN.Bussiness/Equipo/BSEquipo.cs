using Microsoft.Extensions.Configuration;
using STN.Data.Equipo;
using STN.Entitie.Equipo;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Bussiness.Equipo
{
    public class BSEquipo
    {
        private ApplicationDbContext context;
        private IConfiguration configuration;

        public BSEquipo(ApplicationDbContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        public List<DTOEquipo> ObtenerEquipos(int iDCompania)
        {
            var daEquipo = new DAEquipo(context);
            string storedProcedure = configuration["StoredProcedures:Equipos"];
            return daEquipo.fn_ObtenerEquipos(storedProcedure, iDCompania);
        }
    }
}
