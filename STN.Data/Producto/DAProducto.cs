using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Data.Producto
{
    public class DAProducto
    {
        private readonly ApplicationDbContext _context;

        public DAProducto(ApplicationDbContext context)
        {
            this._context = context;
        }

        public DataTable fn_ObtenerProductos(string v)
        {
            DataTable dtResultado = new DataTable();
            try
            {
                SqlHelper helper = new SqlHelper(_context);
                dtResultado = helper.fn_ObtenerResultado(v);
            }
            catch (Exception ex) {
                throw ex;
            }
            return dtResultado;
        }
    }
}
