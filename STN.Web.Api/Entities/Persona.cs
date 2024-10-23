using STN.Entitie.RRHH;

namespace STN.Web.Api.Entities
{
    public class RequestPersona
    {
        public int IDCompania { get; set; }
    }
    public class ResponsePersona
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOPersonaGet> data { get; set; }
    }
    public class RequestPersonaDetail
    {
        public int IDCompania { get; set; }
        public int IDPersona { get; set; }
    }
    public class ResponsePersonaDetail
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOPersonaRegister> data { get; set; }
    }
    public class ModelPersona
    {
        public int IdPersona { get; set; }
        public int IdCompania { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int IdTipoDocumento { get; set; }
        public string NumeroDocumento { get; set; }
        public int IdEstadoCivil { get; set; }
        public int IdSexo { get; set; }       
        public string Direccion { get; set; }
        public string Observacion { get; set; }
        public int UsuarioRegistro { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Ubigeo { get; set; }
    }
    public class ResponseCreatePersona
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool result { get; set; }
    }
    public class ResponseDeletePersona
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool data { get; set; }
    }
}
