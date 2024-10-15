using STN.Data.Producto;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Bussiness.Producto
{
    public class BSProducto
    {
        private readonly ApplicationDbContext _context;
        public BSProducto(ApplicationDbContext context)
        {
            _context = context;
        }

        public DataTable ObtenerProductos()
        {
            var daProducto = new DAProducto(_context);
            return daProducto.fn_ObtenerProductos("Pa_Producto_Listar");
        }
    }
}
