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
        public int IdCompañia { get; set; }
        public string DescripcionProducto { get; set; }
        public int IdTipo { get; set; }
        public int IdUnidadMedida { get; set; }
        public decimal StockMinimo { get; set; }
        public int IdMarca { get; set; }
        public bool ArticuloCompra { get; set; }
        public bool ArticuloInventario { get; set; }
        public int Usuario { get; set; }
    }
}
