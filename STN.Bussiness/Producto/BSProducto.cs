using Microsoft.Extensions.Configuration;
using STN.Data.Producto;
using STN.Entitie.Producto;
using STN.Entitie;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using STN.Entitie.Response;

namespace STN.Bussiness.Producto
{
    public class BSProducto
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        public BSProducto(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public bool EliminarProducto(int iDProducto, int iDCompania)
        {
            var daProducto = new DAProducto(_context);
            bool resultadoBool = false;
            string storedProcedure = _configuration["StoredProcedures:EliminarProducto"];
            int resultado = daProducto.fn_EliminarProducto(storedProcedure, iDProducto, iDCompania);
            if(resultado == 0) resultadoBool = true;        
            return resultadoBool;
        }

        public DataTable ObtenerProducto(int iDProducto, int iDCompania)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:Producto"];
            return daProducto.fn_ObtenerProducto(storedProcedure, iDProducto, iDCompania);
        }

        public DataTable ObtenerProductos(int iDCompania)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:Productos"];
            return daProducto.fn_ObtenerProductos(storedProcedure, iDCompania);
        }
        public int CrearProducto(DTOProducto obj)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:RegistrarProducto"];
            int resultado = daProducto.fn_CrearProducto(storedProcedure, obj);
            return resultado;
        }
        public int ActualizarProducto(DTOProducto obj)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:ActualizarProducto"];
            int resultado = daProducto.fn_ActualizarProducto(storedProcedure, obj);
            return resultado;
        }
    }
}
