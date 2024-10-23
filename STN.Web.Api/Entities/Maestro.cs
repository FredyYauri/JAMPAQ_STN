using STN.Entitie.Maestro;

namespace STN.Web.Api.Entities
{
    public class ResponseMaestro
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<Dictionary<string, object>> data { get; set; }
    }

    public class RequestMaestro
    {
        public String IDCompania { get; set; }
    }
    public class ResponseParametro
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOParametro> data { get; set; }
    }

    public class RequestParametro
    {
        public string Tabla { get; set; }
    }

}
