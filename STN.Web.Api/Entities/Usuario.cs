namespace STN.Web.Api.Entities
{
    public class RequestUsuario
    {
        public String usuario { get; set; }
        public String clave { get; set; }
        public String compania { get; set; }
    }

    public class ResponseUsuario
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public String token { get; set; }
        public List<Dictionary<string, object>> data { get; set; }
    }
 }
