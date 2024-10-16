namespace STN.Web.Api.Entities
{
    public class RequestProduct
    {
        public int IDCompania { get; set; }
        public int TipoFiltro { get; set; } = 0;
        public string Filtro { get; set; } = "";
        public int ArticuloVenta { get; set; } = 0;
    }
    public class ResponseProducto
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<Dictionary<string, object>> data { get; set; }
    }
}
