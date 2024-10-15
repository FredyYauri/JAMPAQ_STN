namespace STN.Web.Api.Entities
{
    public class ResponseProducto
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<Dictionary<string, object>> data { get; set; }
    }
}
