using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Microsoft.Extensions.Configuration;
using STN.Entitie.Producto;
using STN.Entitie.Response;

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
                dtResultado = helper.fn_ObtenerResultado(storedProcedure, iDCompania, iDProducto);
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
            catch (Exception ex)
            {
                throw ex;
            }
            return dtResultado;
        }
        public int fn_CrearProducto(string store, DTOProducto obj)
        {
            SqlConnection oSqlConnection = null;

            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();                
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@DescripcionProducto", obj.DescripcionProducto);
                cm.Parameters.AddWithValue("@IdTipo", obj.IdTipo);
                cm.Parameters.AddWithValue("@IdUnidadMedida", obj.IdUnidadMedida);
                cm.Parameters.AddWithValue("@StockMinimo", obj.StockMinimo);
                cm.Parameters.AddWithValue("@IdMarca", obj.IdMarca);
                cm.Parameters.AddWithValue("@ArticuloCompra", obj.ArticuloCompra);
                cm.Parameters.AddWithValue("@ArticuloInventario", obj.ArticuloInventario);
                cm.Parameters.AddWithValue("@Usuario", obj.Usuario);
                int rpta = cm.ExecuteNonQuery();
                return rpta;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int fn_ActualizarProducto(string store, DTOProducto obj)
        {
            SqlConnection oSqlConnection = null;
            try
            {
                oSqlConnection = new SqlConnection(_context.Database.GetConnectionString());
                oSqlConnection.Open();
                SqlCommand cm = new SqlCommand(store, oSqlConnection);
                cm.CommandType = CommandType.StoredProcedure;
                cm.Parameters.AddWithValue("@IdProducto", obj.IdProducto);
                cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                cm.Parameters.AddWithValue("@DescripcionProducto", obj.DescripcionProducto);
                cm.Parameters.AddWithValue("@IdTipo", obj.IdTipo);
                cm.Parameters.AddWithValue("@IdUnidadMedida", obj.IdUnidadMedida);
                cm.Parameters.AddWithValue("@StockMinimo", obj.StockMinimo);
                cm.Parameters.AddWithValue("@IdMarca", obj.IdMarca);
                cm.Parameters.AddWithValue("@ArticuloCompra", obj.ArticuloCompra);
                cm.Parameters.AddWithValue("@ArticuloInventario", obj.ArticuloInventario);
                cm.Parameters.AddWithValue("@Usuario", obj.Usuario);
                int rpta = cm.ExecuteNonQuery();
                return rpta;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
