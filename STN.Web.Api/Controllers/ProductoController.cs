using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Producto;
using STN.Bussiness.Seguridad;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;
using System.Data;
using STN.Entitie.Producto;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductoController : ControllerBase
    {
        private readonly BSProducto _bsProducto;
        private readonly IConfiguration _configuration;
        public ProductoController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsProducto = new BSProducto(context, configuration);
            _configuration = configuration;
        }

        [HttpGet("ObtenerProductos")]
        [Authorize]
        public IActionResult Index([FromQuery] RequestProduct request)
        {
            Helper helper = new Helper();
            DTOProducto obj = new DTOProducto()
            {
                IdCompania = request.IDCompania
            };
            try
            {
                var resultado = _bsProducto.ObtenerProductos(obj);
                ResponseProducto response = new ResponseProducto();
                if (resultado.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron productos";
                }
                else
                {
                    response.status = 0;
                    response.mesage = "Consulta Exitosa";
                    response.data = resultado;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("ObtenerProducto")]
        [Authorize]
        public IActionResult ObtenerProducto([FromQuery] RequestProductDetail request)
        {
            Helper helper = new Helper();
            DTOProducto obj = new DTOProducto()
            {
                IdCompania = request.IDCompania,
                IdProducto = request.IDProducto
            };
            try
            {
                var resultado = _bsProducto.ObtenerProducto(obj);
                ResponseProductoDetail response = new ResponseProductoDetail();
                if (resultado.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron productos";
                }
                else
                {
                    response.status = 0;
                    response.data = resultado;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }       
        
        [HttpPost("RegistrarProducto")]
        [Authorize]
        public IActionResult Create([FromBody] ModelProducto model)
        {
            DTOProductoCreate obj = new DTOProductoCreate()
            {
                IdCompania = model.IdCompania,
                DescripcionProducto = model.DescripcionProducto,
                IdTipo = model.IdTipo,
                IdUnidadMedida = model.IdUnidadMedida,
                StockMinimo = model.StockMinimo,
                IdMarca = model.IdMarca,
                ArticuloCompra = model.ArticuloCompra,
                ArticuloInventario = model.ArticuloInventario,
                Usuario = model.Usuario
            };
            try
            {
                var resultado = _bsProducto.CrearProducto(obj);
                ResponseCreateProducto response = new ResponseCreateProducto();

                if (resultado > 0)
                {
                    response.status = 0;
                    response.mesage = "Producto registrado correctamente";
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo registrar el producto";
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        
        [HttpPut("ActualizarProducto")]
        [Authorize]
        public IActionResult Update([FromBody] ModelProducto model)
        {
            DTOProductoUpdate obj = new DTOProductoUpdate()
            {
                IdProducto = model.IdProducto,
                IdCompania = model.IdCompania,
                DescripcionProducto = model.DescripcionProducto,
                IdTipo = model.IdTipo,
                IdUnidadMedida = model.IdUnidadMedida,
                StockMinimo = model.StockMinimo,
                IdMarca = model.IdMarca,
                ArticuloCompra = model.ArticuloCompra,
                ArticuloInventario = model.ArticuloInventario,
                Usuario = model.Usuario
            };
            try
            {
                var resultado = _bsProducto.ActualizarProducto(obj);
                ResponseCreateProducto response = new ResponseCreateProducto();

                if (resultado > 0)
                {
                    response.status = 0;
                    response.mesage = "Producto actualizado correctamente";
                    response.result = true;
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo actualizar el producto";
                    response.result = false;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        
        [HttpDelete("EliminarProducto")]
        [Authorize]
        public IActionResult Delete([FromQuery] RequestProductDetail request)
        {
            DTOProducto obj = new DTOProducto()
            {
                IdCompania = request.IDCompania,
                IdProducto = request.IDProducto
            };
            try
            {
                var resultado = _bsProducto.EliminarProducto(obj);
                ResponseDeleteProducto response = new ResponseDeleteProducto();
                if (resultado)
                {
                    response.status = 0;
                    response.mesage = "Producto eliminado correctamente";
                    response.data = true;
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo eliminar el producto";
                    response.data = false;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
