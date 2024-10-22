using STN.Entitie.Equipo;
using STN.Entitie.Producto;

namespace STN.Web.Api.Entities
{
    public class RequestEquipo
    {
        public int IDCompania { get; set; }
    }
    public class ResponseEquipo
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOEquipoGet> data { get; set; }
    }
    public class RequestEquipoDetail
    {
        public int IDCompania { get; set; }
        public int IDEquipo { get; set; }
    }
    public class ResponseEquipoDetail
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOEquipoRegister> data { get; set; }
    }
    public class ModelEquipo
    {
        public int IdEquipo { get; set; }
        public int IdCompania { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Serie { get; set; }
        public int TipoControl { get; set; }
        public decimal Valor { get; set; }
        public int TipoMantenimiento { get; set; }
        public string Observaciones { get; set; }
        public decimal ImporteMN { get; set; }
        public int Usuario { get; set; }
    }
    public class ResponseCreateEquipo
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool result { get; set; }
    }
    public class ResponseDeleteEquipo
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool data { get; set; }
    }
}
