namespace STN.Web.Api.Entities
{
    public class RequestProduct
    {
        public int IDCompania { get; set; }
    }
    public class ResponseProducto
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<Dictionary<string, object>> data { get; set; }
    }

    public class RequestProductDetail
    {
        public int IDCompania { get; set; }
        public int IDProducto { get; set; }
    }
    public class ResponseDeleteProducto
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool data { get; set; }
    }
}
