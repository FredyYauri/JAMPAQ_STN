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

        public int fn_EliminarProducto(string storedProcedure, int iDProducto, int iDCompania)
        {
            DataTable dtResultado = new DataTable();
            try
            {
                SqlHelper helper = new SqlHelper(_context);
                dtResultado = helper.fn_ObtenerResultado(storedProcedure, iDCompania, iDProducto);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Convert.ToInt32(dtResultado.Rows[0][0]);
        }

        public DataTable fn_ObtenerProducto(string storedProcedure, int iDProducto, int iDCompania)
        {
            DataTable dtResultado = new DataTable();
            try
            {
                SqlHelper helper = new SqlHelper(_context);
                dtResultado = helper.fn_ObtenerResultado(storedProcedure, iDProducto, iDCompania);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return dtResultado;
        }

        public DataTable fn_ObtenerProductos(string v, int iDCompania)
        {
            DataTable dtResultado = new DataTable();
            try
            {
                SqlHelper helper = new SqlHelper(_context);
                dtResultado = helper.fn_ObtenerResultado(v, iDCompania);
            }
            catch (Exception ex) {
                throw ex;
            }
            return dtResultado;
        }
    }
}
