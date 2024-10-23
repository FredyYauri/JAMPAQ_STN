using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Entitie.RRHH
{
    public class DTOEmpleado
    {
        public int IdEmpleado { get; set; }
        public int IdCompania { get; set; }
    }
    public class DTOEmpleadoGet
    {
        
    }
    public class DTOEmpleadoRegister
    {
        
    }
    public class DTOEmpleadoCreate
    {
        public int IdCompania { get; set; }
        public int IdPersona { get; set; }
        public DateTime FechaIngreso { get; set; }
        public int IdArea { get; set; }
        public int IdCargo { get; set; }
        public int CantHijos { get; set; }        
        public int TipoContrato { get; set; }
        public decimal SueldoBasico { get; set; }
        public string PersonaContacto { get; set; }
        public string NumeroContacto { get; set; }
        public int BancoConsignacion { get; set; }
        public string NumeroCuenta { get; set; }
        public string NumeroCuentaCCI { get; set; }
        public int TipoComprobante { get; set; }
        public int TipoAFP{ get; set; }
        public string NumeroCuentaAFP { get; set; }
        public int UsuarioRegistro { get; set; }
    }
    public class DTOEmpleadoUpdate
    {
        public int IdEmpleado { get; set; }
        public int IdCompania { get; set; }
        public int IdPersona { get; set; }
        public DateTime FechaIngreso { get; set; }
        public int IdArea { get; set; }
        public int IdCargo { get; set; }
        public int CantHijos { get; set; }
        public int TipoContrato { get; set; }
        public decimal SueldoBasico { get; set; }
        public string PersonaContacto { get; set; }
        public string NumeroContacto { get; set; }
        public int BancoConsignacion { get; set; }
        public string NumeroCuenta { get; set; }
        public string NumeroCuentaCCI { get; set; }
        public int TipoComprobante { get; set; }
        public int TipoAFP { get; set; }
        public string NumeroCuentaAFP { get; set; }
        public int UsuarioRegistro { get; set; }

    }
}
