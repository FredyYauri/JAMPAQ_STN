using STN.Entitie.RRHH;

namespace STN.Web.Api.Entities
{
    public class RequestEmpleado
    {
        public int IDCompania { get; set; }
    }
    public class ResponseEmpleado
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOEmpleadoGet> data { get; set; }
    }
    public class RequestEmpleadoDetail
    {
        public int IDCompania { get; set; }
        public int IDEmpleado { get; set; }
    }
    public class ResponseEmpleadoDetail
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOEmpleadoRegister> data { get; set; }
    }
    public class ModelEmpleado
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
        public int TipoAFP { get; set; }
        public string NumeroCuentaAFP { get; set; }
        public int UsuarioRegistro { get; set; }
    }
    public class ResponseCreateEmpleado
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool result { get; set; }
    }
    public class ResponseDeleteEmpleado
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool data { get; set; }
    }
}
