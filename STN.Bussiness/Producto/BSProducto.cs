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
        public List<DTOProductoGet> ObtenerProductos(DTOProducto obj)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:Productos"];
            return daProducto.fn_ObtenerProductos(storedProcedure, obj);
        }
        public List<DTOProductoRegister> ObtenerProducto(DTOProducto obj)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:Producto"];
            return daProducto.fn_ObtenerProducto(storedProcedure, obj);
        }
        public int CrearProducto(DTOProductoCreate obj)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:RegistrarProducto"];
            int resultado = daProducto.fn_CrearProducto(storedProcedure, obj);
            return resultado;
        }
        public int ActualizarProducto(DTOProductoUpdate obj)
        {
            var daProducto = new DAProducto(_context);
            string storedProcedure = _configuration["StoredProcedures:ActualizarProducto"];
            int resultado = daProducto.fn_ActualizarProducto(storedProcedure, obj);
            return resultado;
        }
        public bool EliminarProducto(DTOProducto obj)
        {
            var daProducto = new DAProducto(_context);
            bool resultadoBool = false;
            string storedProcedure = _configuration["StoredProcedures:EliminarProducto"];
            int resultado = daProducto.fn_EliminarProducto(storedProcedure, obj);
            if (resultado == 1) resultadoBool = true;
            return resultadoBool;
        }
    }
}
