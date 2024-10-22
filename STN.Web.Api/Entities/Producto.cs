
using STN.Entitie.Producto;

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
        public List<DTOProductoGet> data { get; set; }
    }

    public class RequestProductDetail
    {
        public int IDCompania { get; set; }
        public int IDProducto { get; set; }
    }
    public class ResponseProductoDetail
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public List<DTOProductoRegister> data { get; set; }
    }
    public class ResponseDeleteProducto
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool data { get; set; }
    }
    public class ModelProducto
    {
        public int IdProducto { get; set; }
        public int IdCompania { get; set; }
        public string? DescripcionProducto { get; set; }
        public int IdTipo { get; set; }
        public int IdUnidadMedida { get; set; }
        public decimal StockMinimo { get; set; }
        public int IdMarca { get; set; }
        public bool ArticuloCompra { get; set; }
        public bool ArticuloInventario { get; set; }
        public int Usuario { get; set; }
    }
    public class ResponseCreateProducto
    {
        public int status { get; set; }
        public String mesage { get; set; } = "";
        public bool result { get; set; }
    }
}
