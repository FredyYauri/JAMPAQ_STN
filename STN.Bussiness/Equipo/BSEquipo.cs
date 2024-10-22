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

        public List<DTOEquipoGet> ObtenerEquipos(int iDCompania)
        {
            var daEquipo = new DAEquipo(context);
            string storedProcedure = configuration["StoredProcedures:Equipos"];
            return daEquipo.fn_ObtenerEquipos(storedProcedure, iDCompania);
        }
        public List<DTOEquipoRegister> ObtenerEquipo(DTOEquipo obj)
        {
            var daEquipo = new DAEquipo(context);
            string storedProcedure = configuration["StoredProcedures:Equipo"];
            return daEquipo.fn_ObtenerEquipo(storedProcedure, obj);
        }
        public int CrearEquipo(DTOEquipoCreate obj)
        {
            var daEquipo = new DAEquipo(context);
            string storedProcedure = configuration["StoredProcedures:RegistrarEquipo"];
            int resultado = daEquipo.fn_CrearEquipo(storedProcedure, obj);
            return resultado;
        }
        public int ActualizarEquipo(DTOEquipoUpdate obj)
        {
            var daEquipo = new DAEquipo(context);
            string storedProcedure = configuration["StoredProcedures:ActualizarEquipo"];
            int resultado = daEquipo.fn_ActualizarEquipo(storedProcedure, obj);
            return resultado;
        }
        public bool EliminarEquipo(DTOEquipo obj)
        {
            var daEquipo = new DAEquipo(context);
            bool resultadoBool = false;
            string storedProcedure = configuration["StoredProcedures:EliminarEquipo"];
            int resultado = daEquipo.fn_EliminarEquipo(storedProcedure, obj);
            if (resultado == 1) resultadoBool = true;
            return resultadoBool;
        }
    }
}
