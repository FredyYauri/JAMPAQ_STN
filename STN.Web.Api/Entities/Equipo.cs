using STN.Entitie.Equipo;

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
        public List<DTOEquipo> data { get; set; }
    }

}
