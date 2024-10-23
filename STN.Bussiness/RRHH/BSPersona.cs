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
    public class BSPersona
    {
        private ApplicationDbContext context;
        private IConfiguration configuration;

        public BSPersona(ApplicationDbContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        public List<DTOPersonaGet> ObtenerPersonas(int iDCompania)
        {
            var daPersona = new DAPersona(context);
            string storedProcedure = configuration["StoredProcedures:Personas"];
            return daPersona.fn_ObtenerPersonas(storedProcedure, iDCompania);
        }
        public List<DTOPersonaRegister> ObtenerPersona(DTOPersona obj)
        {
            var daPersona = new DAPersona(context);
            string storedProcedure = configuration["StoredProcedures:Persona"];
            return daPersona.fn_ObtenerPersona(storedProcedure, obj);
        }
        public int CrearPersona(DTOPersonaCreate obj)
        {
            var daPersona = new DAPersona(context);
            string storedProcedure = configuration["StoredProcedures:RegistrarPersona"];
            int resultado = daPersona.fn_CrearPersona(storedProcedure, obj);
            return resultado;
        }
        public int ActualizarPersona(DTOPersonaUpdate obj)
        {
            var daPersona = new DAPersona(context);
            string storedProcedure = configuration["StoredProcedures:ActualizarPersona"];
            int resultado = daPersona.fn_ActualizarPersona(storedProcedure, obj);
            return resultado;
        }
        public bool EliminarPersona(DTOPersona obj)
        {
            var daPersona = new DAPersona(context);
            bool resultadoBool = false;
            string storedProcedure = configuration["StoredProcedures:EliminarPersona"];
            int resultado = daPersona.fn_EliminarPersona(storedProcedure, obj);
            if (resultado == 1) resultadoBool = true;
            return resultadoBool;
        }
    }
}
