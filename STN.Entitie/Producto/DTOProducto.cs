using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Entitie.Producto
{
    public class DTOProducto
    {
        public int IdProducto { get; set; }
        public int IdCompania { get; set; }
    }
    public class DTOProductoGet
    {
        public int Id{ get; set; }
        public string Descripcion { get; set; }
        public string Codigo { get; set; }
        public string Tipo { get; set; }
        public string Unidad { get; set; }
        public decimal StockMinimo { get; set; }
        public decimal StockActual { get; set; }
        public string Reposicion { get; set; }
        public string Estado { get; set; }

    }
    public class DTOProductoRegister
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public string Codigo { get; set; }
        public int IdTipo { get; set; }
        public string Tipo { get; set; }
        public int IdUnidadMedida { get; set; }        
        public string Unidad { get; set; }
        public string StockMinimo { get; set; }
        public string Reposicion { get; set; }
        public int IdMarca { get; set; }
        public string DescripcionMarca { get; set; }
        public string Estado { get; set; }
        public bool ArticuloCompra { get; set; }
        public bool ArticuloInventario { get; set; }

    }
    public class DTOProductoCreate
    {
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
    public class DTOProductoUpdate
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
}
