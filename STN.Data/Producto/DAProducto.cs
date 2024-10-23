﻿using System;
using System.Collections;
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

namespace STN.Data.Producto
{
    public class DAProducto
    {
        private readonly ApplicationDbContext _context;

        public DAProducto(ApplicationDbContext context)
        {
            this._context = context;
        }
        public List<DTOProductoGet> fn_ObtenerProductos(string store, DTOProducto obj)
        {
            List<DTOProductoGet> Lista = new List<DTOProductoGet>();
            try
            {
                using (SqlConnection cn = new SqlConnection(_context.Database.GetConnectionString()))
                {
                    cn.Open();
                    SqlCommand cm = new SqlCommand(store, cn);
                    cm.CommandType = CommandType.StoredProcedure;
                    cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                    SqlDataReader dr = cm.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            DTOProductoGet oProduct = new DTOProductoGet();
                            oProduct.Id = Convert.ToInt32(dr["Id"]);
                            oProduct.Descripcion = dr["Descripcion"].ToString() ?? "";
                            oProduct.Codigo = dr["Codigo"].ToString() ?? "";
                            oProduct.Tipo = dr["Tipo"].ToString() ?? "";
                            oProduct.Unidad = dr["Unidad"].ToString() ?? "";
                            oProduct.StockMinimo = Convert.ToDecimal(dr["StockMinimo"]);
                            oProduct.StockActual = Convert.ToDecimal(dr["StockActual"]);
                            oProduct.Reposicion = dr["Reposicion"].ToString() ?? "";
                            oProduct.Estado = dr["Estado"].ToString() ?? "";
                            Lista.Add(oProduct);
                        }
                    }
                }
                                
            }
            catch (Exception ex)
            {
                throw ex;               
            }
            return Lista;
        }
        public List<DTOProductoRegister> fn_ObtenerProducto(string store, DTOProducto obj)
        {
            List<DTOProductoRegister> Lista = new List<DTOProductoRegister>();
            try
            {
                using (SqlConnection cn = new SqlConnection(_context.Database.GetConnectionString()))
                {
                    cn.Open();
                    SqlCommand cm = new SqlCommand(store, cn);
                    cm.CommandType = CommandType.StoredProcedure;
                    cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                    cm.Parameters.AddWithValue("@ID", obj.IdProducto);
                    SqlDataReader dr = cm.ExecuteReader();
                    if (dr.HasRows)
                    {
                        while (dr.Read())
                        {
                            DTOProductoRegister oProduct = new DTOProductoRegister();
                            oProduct.Id = Convert.ToInt32(dr["Id"]);
                            oProduct.Descripcion = dr["Descripcion"].ToString() ?? "";
                            oProduct.Codigo = dr["Codigo"].ToString() ?? "";
                            oProduct.IdTipo = Convert.ToInt32(dr["IdTipo"]);
                            oProduct.Tipo = dr["Tipo"].ToString() ?? "";
                            oProduct.IdUnidadMedida = Convert.ToInt32(dr["IdUnidadMedida"]);
                            oProduct.Unidad = dr["Unidad"].ToString() ?? "";
                            oProduct.StockMinimo = dr["StockMinimo"].ToString() ?? "0.000";
                            oProduct.Reposicion = dr["Reposicion"].ToString() ?? "";
                            oProduct.IdMarca = Convert.ToInt32(dr["IdMarca"]);
                            oProduct.DescripcionMarca = dr["DescripcionMarca"].ToString() ?? "";
                            oProduct.Estado = dr["Estado"].ToString() ?? "";
                            oProduct.ArticuloCompra = Convert.ToBoolean(dr["ArticuloCompra"]);
                            oProduct.ArticuloInventario = Convert.ToBoolean(dr["ArticuloInventario"]);
                            Lista.Add(oProduct);
                        }
                    }
                }                    
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Lista;
        }
        public int fn_CrearProducto(string store, DTOProductoCreate obj)
        {
            try
            {
                using (SqlConnection cn = new SqlConnection(_context.Database.GetConnectionString()))
                {
                    cn.Open();
                    SqlCommand cm = new SqlCommand(store, cn);
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
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        public int fn_ActualizarProducto(string store, DTOProductoUpdate obj)
        {
            try
            {
                using (SqlConnection cn = new SqlConnection(_context.Database.GetConnectionString()))
                {
                    cn.Open();
                    SqlCommand cm = new SqlCommand(store, cn);
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
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        public int fn_EliminarProducto(string store, DTOProducto obj)
        {
            try
            {
                using (SqlConnection cn = new SqlConnection(_context.Database.GetConnectionString()))
                {
                    cn.Open();
                    SqlCommand cm = new SqlCommand(store, cn);
                    cm.CommandType = CommandType.StoredProcedure;
                    cm.Parameters.AddWithValue("@IdCompania", obj.IdCompania);
                    cm.Parameters.AddWithValue("@IdProducto", obj.IdProducto);
                    int rpta = cm.ExecuteNonQuery();
                    return rpta;
                }                   
            }
            catch (Exception ex)
            {
                return -1;
            }
        }

    }
}
