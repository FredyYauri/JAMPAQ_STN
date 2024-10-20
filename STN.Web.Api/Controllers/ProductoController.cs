using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Producto;
using STN.Bussiness.Seguridad;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;
using System.Data;

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
            try
            {
                var resultado = _bsProducto.ObtenerProductos(request.IDCompania);
                ResponseProducto response = new ResponseProducto();
                if (resultado.Rows.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron productos";
                }
                else
                {
                    response.status = 0;
                    response.data = helper.ConvertDataTableToJson(resultado);
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
        public IActionResult About([FromQuery] RequestProductDetail request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsProducto.ObtenerProducto(request.IDProducto, request.IDCompania);
                ResponseProducto response = new ResponseProducto();
                if (resultado.Rows.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron productos";
                }
                else
                {
                    response.status = 0;
                    response.data = helper.ConvertDataTableToJson(resultado);
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
            try
            {
                var resultado = _bsProducto.EliminarProducto(request.IDProducto, request.IDCompania);
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
